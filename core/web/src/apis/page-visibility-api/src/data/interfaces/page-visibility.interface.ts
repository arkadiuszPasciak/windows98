import type { PageVisibilityState } from "../models"

export interface PageVisibilityInterface {
	readonly visibilityState: PageVisibilityState
	readonly hidden: boolean

	addEventListener(
		type: "visibilitychange",
		listener: (this: PageVisibilityInterface, event: Event) => void,
	): void

	removeEventListener(
		type: "visibilitychange",
		listener: (this: PageVisibilityInterface, event: Event) => void,
	): void
}
