import type { PageVisibilityState } from "./state.model"

export interface PageVisibilityChangeEvent {
	previousState: PageVisibilityState
	currentState: PageVisibilityState
	hidden: boolean
	timestamp: number
}
