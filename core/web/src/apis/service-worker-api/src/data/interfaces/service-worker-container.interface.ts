import type { ServiceWorkerRegistrationInterface } from "./service-worker-registration.interface"
import type { ServiceWorkerInterface } from "./service-worker.interface"

export interface ServiceWorkerContainerInterface {
	controller: ServiceWorkerInterface | null
	ready: Promise<ServiceWorkerRegistrationInterface>

	register(
		scriptURL: string,
		options?: { scope?: string },
	): Promise<ServiceWorkerRegistrationInterface>
	addEventListener(
		type: "controllerchange",
		listener: (this: ServiceWorkerContainerInterface, event: Event) => void,
	): void
	removeEventListener(
		type: "controllerchange",
		listener: (this: ServiceWorkerContainerInterface, event: Event) => void,
	): void
}
