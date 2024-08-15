import { getTimeClock } from "@APP|Bundles/ClockBundle/Services/Clock.services"
import { useClockStore } from "@APP|Bundles/ClockBundle/Stores/Clock.stores"
import { createPinia, setActivePinia } from "pinia"
import { describe, expect, it } from "vitest"

describe("[ClockBundle]<Services>(getTimeClock)", () => {
	it("should return short time", () => {
		const time = getTimeClock({
			timeStyle: "short",
		})

		expect(time?.length)
	})

	it("should return medium time", () => {
		const time = getTimeClock({
			timeStyle: "medium",
		})

		expect(time?.length)
	})

	it("should return null if params are falsy or empty", () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		expect(getTimeClock()).toBe(null)
	})
})

describe("[ClockBundle]<Stores>(useClockStore)", () => {
	setActivePinia(createPinia())
	const clock = useClockStore()

	it("has default time", () => {
		expect(clock.time).toBe("12:00 PM")
	})

	it("changes time on updateTime", () => {
		clock.time = "default value to check update"
		const defaultValue = clock.time as string

		clock.updateTime()

		expect(clock.time).not.equal(defaultValue)
	})
})
