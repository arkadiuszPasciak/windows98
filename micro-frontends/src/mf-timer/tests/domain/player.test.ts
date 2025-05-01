import { describe, expect, it } from "vitest"
import { TimerDomain, TimerPlayerDomain } from "../../src/domain/domains"
import { ETimerStatus } from "../../src/domain/models"

describe("TimerPlayerDomain", () => {
	const timerDomain = new TimerDomain()
	const timerPlayerDomain = new TimerPlayerDomain(timerDomain)

	it("should start the timer", () => {
		timerPlayerDomain.start()
		expect(timerDomain.status).toBe(ETimerStatus.PLAY)
	})

	it("should stop the timer", () => {
		timerPlayerDomain.stop()
		expect(timerDomain.status).toBe(ETimerStatus.STOP)
	})

	it("should reset the timer", () => {
		timerPlayerDomain.reset()
		expect(timerDomain.status).toBe(ETimerStatus.RESET)
		expect(timerDomain.time.seconds).toBe(0)
		expect(timerDomain.time.minutes).toBe(0)
		expect(timerDomain.time.hours).toBe(0)
	})
})
