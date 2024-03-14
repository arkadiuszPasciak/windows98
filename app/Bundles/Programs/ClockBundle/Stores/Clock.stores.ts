import { defineStore } from "pinia"
import { getTimeClock } from "@APP|Bundles/ClockBundle/Services/Clock.services"
import { Nullable } from "vitest"

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
