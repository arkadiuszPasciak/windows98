export type ServiceWorkerState =
	| "installing"
	| "installed"
	| "activating"
	| "activated"
	| "redundant"
	| "parsed"

export interface ServiceWorkerStateModel {
	scriptURL: string
	state: ServiceWorkerState
}
