import { MStartStoreApps } from "@APP/src/bundles/Programs/StartBundle/Mocks/Start.mocks"
import type { IStartStoreApps } from "@APP/src/bundles/Programs/StartBundle/Supports/Start.supports"
import { defineStore } from "pinia"

export const useStartStore = defineStore("start", {
	state: () => ({
		apps: MStartStoreApps as IStartStoreApps[],
	}),
})
