import type { PointerLockAPIRepositoryContract } from "../contracts"
import type { ElementWithPointerLockInterface } from "../interfaces"
import type {
	PointerLockChangeEvent,
	PointerLockState,
	PointerMovementEvent,
} from "../models"

export class PointerLockAPIRepository
	implements PointerLockAPIRepositoryContract
{
	public getState(): PointerLockState {
		const element = window.document.pointerLockElement as HTMLElement | null
		return {
			element,
			isLocked: !!element,
		}
	}

	public async requestPointerLock(
		element: ElementWithPointerLockInterface,
	): Promise<void> {
		await element.requestPointerLock()
	}

	public exitPointerLock(): void {
		window.document.exitPointerLock()
	}

	public onPointerLockChange(
		listener: (event: PointerLockChangeEvent) => void,
	): void {
		let previousElement: HTMLElement | null = null
		window.document.addEventListener("pointerlockchange", () => {
			const currentElement = window.document
				.pointerLockElement as HTMLElement | null

			listener({
				previousElement,
				currentElement,
				isLocked: !!currentElement,
				timestamp: Date.now(),
			})

			previousElement = currentElement
		})
	}

	public offPointerLockChange(
		listener: (event: PointerLockChangeEvent) => void,
	): void {
		window.document.removeEventListener(
			"pointerlockchange",
			listener as unknown as EventListener,
		)
	}

	public onPointerLockError(listener: (event: Event) => void): void {
		window.document.addEventListener("pointerlockerror", listener)
	}

	public offPointerLockError(listener: (event: Event) => void): void {
		window.document.removeEventListener("pointerlockerror", listener)
	}

	public onPointerMovement(
		listener: (event: PointerMovementEvent) => void,
	): void {
		window.document.addEventListener("mousemove", (event: MouseEvent) => {
			if (this.getState().isLocked) {
				listener({
					movementX: event.movementX,
					movementY: event.movementY,
					timestamp: Date.now(),
				})
			}
		})
	}

	public offPointerMovement(
		listener: (event: PointerMovementEvent) => void,
	): void {
		window.document.removeEventListener(
			"mousemove",
			listener as unknown as EventListener,
		)
	}
}
