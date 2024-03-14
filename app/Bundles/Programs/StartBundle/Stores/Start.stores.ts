import { defineStore } from "pinia"
import { IStartStoreApps } from "@APP|Bundles/StartBundle/Supports/Start.supports"
import { MStartStoreApps } from "@APP|Bundles/StartBundle/Mocks/Start.mocks"

export const useStartStore = defineStore("start", {
	state: () => ({
		apps: MStartStoreApps as IStartStoreApps[],
	}),
})
