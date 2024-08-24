import { MPulpitStoreApps } from "@APP/src/bundles/App/PulpitBundle/Mocks/Pulpit.mocks"
import type { IPulpitStoresState } from "@APP/src/bundles/App/PulpitBundle/Supports/PulpitStores.supports"
import { defineStore } from "pinia"

export const usePulpitStore = defineStore("pulpit", {
	state: () =>
		({
			apps: MPulpitStoreApps,
		}) as IPulpitStoresState,
})
