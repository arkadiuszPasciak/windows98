import type { ServiceWorkerRegistrationModel } from "./registration.model"

export type ServiceWorkerUpdateState = "found" | "not-found" | "error"

export interface ServiceWorkerUpdateResult {
	state: ServiceWorkerUpdateState
	registration?: ServiceWorkerRegistrationModel
	error?: string
}
