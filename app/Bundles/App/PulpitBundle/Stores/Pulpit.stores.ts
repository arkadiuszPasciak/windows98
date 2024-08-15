import { MPulpitStoreApps } from "@APP|Bundles/PulpitBundle/Mocks/Pulpit.mocks"
import type { IPulpitStoresState } from "@APP|Bundles/PulpitBundle/Supports/PulpitStores.supports"
import { defineStore } from "pinia"

export const usePulpitStore = defineStore("pulpit", {
	state: () =>
		({
			apps: MPulpitStoreApps,
		}) as IPulpitStoresState,
})
