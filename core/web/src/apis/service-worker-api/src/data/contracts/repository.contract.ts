import type { Maybe } from "@windows98/toolkit"
import type {
	ServiceWorkerRegistrationModel,
	ServiceWorkerUpdateResult,
} from "../models"

export interface ServiceWorkerAPIRepositoryContract {
	register(
		scriptURL: string,
		options?: { scope?: string },
	): Promise<ServiceWorkerRegistrationModel>
	getRegistration(): Promise<Maybe<ServiceWorkerRegistrationModel>>
	update(): Promise<ServiceWorkerUpdateResult>
	unregister(): Promise<boolean>
	onControllerChange(listener: (event: Event) => void): void
	offControllerChange(listener: (event: Event) => void): void
}
