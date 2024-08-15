import { MStartStoreApps } from "@APP|Bundles/StartBundle/Mocks/Start.mocks"
import type { IStartStoreApps } from "@APP|Bundles/StartBundle/Supports/Start.supports"
import { defineStore } from "pinia"

export const useStartStore = defineStore("start", {
	state: () => ({
		apps: MStartStoreApps as IStartStoreApps[],
	}),
})
