import type { Maybe } from "@windows98/toolkit"
import type { ServiceWorkerStateModel } from "./state.model"

export interface ServiceWorkerRegistrationModel {
	scope: string
	active: Maybe<ServiceWorkerStateModel>
	installing: Maybe<ServiceWorkerStateModel>
	waiting: Maybe<ServiceWorkerStateModel>
}
