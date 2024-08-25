import { getTimeClock } from "@APP/src/bundles/Programs/ClockBundle/Services/Clock.services"
import { defineStore } from "pinia"
import type { Nullable } from "vitest"

export const useClockStore = defineStore("clock", {
	state: () => ({
		time: "12:00 PM" as Nullable<string>,
	}),
	actions: {
		updateTime() {
			this.time = getTimeClock({
				timeStyle: "short",
			})
		},
	},
})
