import type { Maybe } from "@windows98/toolkit"
import type { ServiceWorkerInterface } from "./service-worker.interface"

export interface ServiceWorkerRegistrationInterface {
	scope: string
	active: Maybe<ServiceWorkerInterface>
	installing: Maybe<ServiceWorkerInterface>
	waiting: Maybe<ServiceWorkerInterface>

	update(): Promise<void>
	unregister(): Promise<boolean>
	addEventListener(
		type: "updatefound",
		listener: (this: ServiceWorkerRegistrationInterface, event: Event) => void,
	): void
	removeEventListener(
		type: "updatefound",
		listener: (this: ServiceWorkerRegistrationInterface, event: Event) => void,
	): void
}
