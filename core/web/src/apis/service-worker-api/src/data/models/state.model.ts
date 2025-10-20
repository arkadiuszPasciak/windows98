export type ServiceWorkerState =
	| "installing"
	| "installed"
	| "activating"
	| "activated"
	| "redundant"

export interface ServiceWorkerStateModel {
	scriptURL: string
	state: ServiceWorkerState
}
