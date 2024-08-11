import { describe, it, expect } from "vitest"
import { TimerControllerDomain, TimerDomain } from "../../src/domain/domains"

describe("TimerControllerDomain", () => {
	const timerDomain = new TimerDomain()
	const timerControllerDomain = new TimerControllerDomain(timerDomain)

	it("should increase seconds", () => {
		timerDomain.time.seconds = 0
		timerControllerDomain.increaseSeconds()
		expect(timerDomain.time.seconds).toBe(1)
	})

	it("should decrease seconds", () => {
		timerDomain.time.seconds = 1
		timerControllerDomain.decreaseSeconds()
		expect(timerDomain.time.seconds).toBe(0)
	})

	it("should increase minutes", () => {
		timerDomain.time.minutes = 0
		timerControllerDomain.increaseMinutes()
		expect(timerDomain.time.minutes).toBe(1)
	})

	it("should decrease minutes", () => {
		timerDomain.time.minutes = 1
		timerControllerDomain.decreaseMinutes()
		expect(timerDomain.time.minutes).toBe(0)
	})

	it("should increase hours", () => {
		timerDomain.time.hours = 0
		timerControllerDomain.increaseHours()
		expect(timerDomain.time.hours).toBe(1)
	})

	it("should decrease hours", () => {
		timerDomain.time.hours = 1
		timerControllerDomain.decreaseHours()
		expect(timerDomain.time.hours).toBe(0)
	})
})
