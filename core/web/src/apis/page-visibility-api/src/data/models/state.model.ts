export type PageVisibilityState =
	| "visible"
	| "hidden"
	| "prerender"
	| "unloaded"

export interface PageVisibilityStateModel {
	visibilityState: PageVisibilityState
	hidden: boolean
	timestamp: number
}
