export interface ServiceWorkerInterface {
	scriptURL: string
	state: ServiceWorkerState

	addEventListener(
		type: "statechange",
		listener: (this: ServiceWorker, event: Event) => void,
	): void
	removeEventListener(
		type: "statechange",
		listener: (this: ServiceWorker, event: Event) => void,
	): void
}
