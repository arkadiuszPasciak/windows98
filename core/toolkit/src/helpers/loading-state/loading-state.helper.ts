import { LoadingState } from "./loading-state.type"

export class LoadingStateHelper {
	private _state: LoadingState

	constructor() {
		this._state = LoadingState.IDLE
	}

	setLoadingState(state: LoadingState) {
		this._state = state
	}

	getLoadingState(): LoadingState {
		return this._state
	}
}
