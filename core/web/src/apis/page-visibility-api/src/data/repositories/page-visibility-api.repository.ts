import type {
	PageVisibilityChangeEvent,
	PageVisibilityState,
	PageVisibilityStateModel,
} from "../models"

export class PageVisibilityAPIRepository {
	private _wrappers = new WeakMap<
		(ev: PageVisibilityChangeEvent) => void,
		(ev: Event) => void
	>()

	public get visibilityState(): PageVisibilityState {
		return window.document.visibilityState
	}

	public get hidden(): boolean {
		return window.document.hidden
	}

	public getState(): PageVisibilityStateModel {
		return {
			visibilityState: this.visibilityState,
			hidden: this.hidden,
			timestamp: Date.now(),
		}
	}

	public onVisibilityChange(
		listener: (event: PageVisibilityChangeEvent) => void,
	): void {
		let previousState: PageVisibilityState = this.visibilityState

		const wrapper = (_event: Event) => {
			const currentState = this.visibilityState
			listener({
				previousState,
				currentState,
				hidden: this.hidden,
				timestamp: Date.now(),
			})
			previousState = currentState
		}

		this._wrappers.set(listener, wrapper)
		window.document.addEventListener("visibilitychange", wrapper)
	}

	public offVisibilityChange(
		listener: (event: PageVisibilityChangeEvent) => void,
	): void {
		const wrapper = this._wrappers.get(listener)

		if (wrapper) {
			window.document.removeEventListener("visibilitychange", wrapper)
			this._wrappers.delete(listener)
		}
	}
}
