import { describe, it, expect } from "vitest"
import { TimerDomain, TimerPresetsDomain } from "../../src/domain/domains"
import { ETimerPresets } from "../../src/domain/models"

describe("TimerPresetsDomain", () => {
	const timerDomain = new TimerDomain()
	const timerPresetsDomain = new TimerPresetsDomain(timerDomain)

	it("should set preset", () => {
		timerPresetsDomain.setPreset(ETimerPresets.FIVE_MINUTES)
		expect(timerPresetsDomain.preset).toBe(ETimerPresets.FIVE_MINUTES)
		expect(timerDomain.time.minutes).toBe(5)
	})

	it("should reset seconds and hours when setting preset", () => {
		timerDomain.time.seconds = 10
		timerDomain.time.hours = 1
		timerPresetsDomain.setPreset(ETimerPresets.TEN_MINUTES)
		expect(timerDomain.time.seconds).toBe(0)
		expect(timerDomain.time.hours).toBe(0)
	})
})
