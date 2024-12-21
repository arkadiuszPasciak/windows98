import { MSDate } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { defineStore } from "pinia"

export const useClockStore = defineStore("clock", {
	state: () => ({
		time: "12:00 PM" as Maybe<string>,
	}),
	actions: {
		updateTime() {
			this.time = MSDate.getTime(undefined, undefined, { timeStyle: "short" })
		},
	},
})
