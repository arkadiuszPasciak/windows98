import type { Maybe } from "@windows98/toolkit"
import type { ServiceWorkerAPIRepositoryContract } from "../contracts"
import type { ServiceWorkerInterface } from "../interfaces"
import type {
	ServiceWorkerRegistrationModel,
	ServiceWorkerStateModel,
	ServiceWorkerUpdateResult,
} from "../models"

export class ServiceWorkerAPIRepository
	implements ServiceWorkerAPIRepositoryContract
{
	constructor(
		private readonly container: ServiceWorkerContainer = navigator.serviceWorker,
	) {}

	public async register(
		scriptURL: string,
		options?: { scope?: string },
	): Promise<ServiceWorkerRegistrationModel> {
		const registration = await this.container.register(scriptURL, options)
		return this.toRegistrationModel(registration)
	}

	public async getRegistration(): Promise<
		Maybe<ServiceWorkerRegistrationModel>
	> {
		try {
			const registration = await this.container.getRegistration()
			if (!registration) {
				return null
			}
			return this.toRegistrationModel(registration)
		} catch {
			return null
		}
	}

	public async update(): Promise<ServiceWorkerUpdateResult> {
		try {
			const registration = await this.container.getRegistration()
			if (!registration) {
				return { state: "not-found" }
			}
			await registration.update()
			return {
				state: "found",
				registration: this.toRegistrationModel(registration),
			}
		} catch (error) {
			return {
				state: "error",
				error: error instanceof Error ? error.message : "Unknown error",
			}
		}
	}

	public async unregister(): Promise<boolean> {
		const registration = await this.container.getRegistration()

		if (!registration) {
			return false
		}

		return registration.unregister()
	}

	public onControllerChange(listener: (event: Event) => void): void {
		this.container.addEventListener("controllerchange", listener)
	}

	public offControllerChange(listener: (event: Event) => void): void {
		this.container.removeEventListener("controllerchange", listener)
	}

	private toRegistrationModel(
		registration: ServiceWorkerRegistration,
	): ServiceWorkerRegistrationModel {
		return {
			scope: registration.scope,
			active: registration.active
				? this.toStateModel(registration.active)
				: null,
			installing: registration.installing
				? this.toStateModel(registration.installing)
				: null,
			waiting: registration.waiting
				? this.toStateModel(registration.waiting)
				: null,
		}
	}

	private toStateModel(
		worker: ServiceWorker | ServiceWorkerInterface,
	): ServiceWorkerStateModel {
		return {
			scriptURL: worker.scriptURL,
			state: worker.state as unknown as ServiceWorkerStateModel["state"],
		}
	}
}
