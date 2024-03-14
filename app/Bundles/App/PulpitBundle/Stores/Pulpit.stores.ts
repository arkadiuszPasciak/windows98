import { defineStore } from "pinia"
import { MPulpitStoreApps } from "@APP|Bundles/PulpitBundle/Mocks/Pulpit.mocks"
import { IPulpitStoresState } from "@APP|Bundles/PulpitBundle/Supports/PulpitStores.supports"

export const usePulpitStore = defineStore("pulpit", {
	state: () =>
		({
			apps: MPulpitStoreApps,
		} as IPulpitStoresState),
})
