import { describe, it, expect } from "vitest"
import { TimerDomain } from "../../src/domain/domains"
import {
	ETimerStatus,
	ETimerTime,
} from "../../src/domain/models"

describe("TimerDomain", () => {
	const timerDomain = new TimerDomain()

	it("should add time", () => {
		timerDomain.addTime(ETimerTime.SECONDS, 10)
		expect(timerDomain.time.seconds).toBe(10)
	})

	it("should subtract time", () => {
		timerDomain.subtractTime(ETimerTime.SECONDS, 5)
		expect(timerDomain.time.seconds).toBe(5)
	})

	it("should set time", () => {
		timerDomain.setTime(ETimerTime.MINUTES, 15)
		expect(timerDomain.time.minutes).toBe(15)
	})

	it("should set status", () => {
		timerDomain.setStatus(ETimerStatus.PLAY)
		expect(timerDomain.status).toBe(ETimerStatus.PLAY)
	})
})
