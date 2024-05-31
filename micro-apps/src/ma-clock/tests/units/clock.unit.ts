import { expect, describe, test, vi } from "vitest"
import ClockService from "../../src/domain/services/clock.service"
import ClockRepository from "../../src/data/repositories/clock.repository"

describe("ClockService", () => {
	const calendarService = new ClockService()

	test("initial state", () => {
		expect(calendarService.clockRepository).toStrictEqual(new ClockRepository())
		expect(calendarService.time).toBeNull()
	})

	test("get time and check field time value", () => {
		const TIME: string = "07:50"

		global.Date.prototype.toLocaleString = vi.fn(() => TIME)

		calendarService.getTime()

		expect(calendarService.time).toStrictEqual(TIME)
	})
})
