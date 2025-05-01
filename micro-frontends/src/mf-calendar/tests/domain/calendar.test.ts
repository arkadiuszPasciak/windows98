import { beforeEach, describe, expect, test, vi } from "vitest"
import { CalendarDomain } from "../../src/domain/domains"

describe("CalendarDomain", () => {
	let calendarDomain: CalendarDomain

	beforeEach(() => {
		const mockDate = new Date(2023, 4)
		vi.setSystemTime(mockDate)

		calendarDomain = new CalendarDomain()
		calendarDomain.initCalendar()

		vi.useRealTimers()
	})

	test.todo("initial state", () => {
		expect(calendarDomain.activeDay).toBe(0)
		expect(calendarDomain.daysInMonth).toBe(0)
		expect(calendarDomain.firstDayOfWeek).toBe(0)
		expect(calendarDomain.currentYear).toBe(2023)
		expect(calendarDomain.currentMonth).toBe(4)
	})

	test("changeCalendarByYear", () => {
		calendarDomain.changeCalendarByYear(2022)
		expect(calendarDomain.currentYear).toBe(2022)
	})

	test("changeCalendarByMonth", () => {
		calendarDomain.changeCalendarByMonth(3)
		expect(calendarDomain.currentMonth).toBe(3)
	})

	test("increaseYear", () => {
		const year = calendarDomain.currentYear

		calendarDomain.increaseYear()
		expect(calendarDomain.currentYear).toBe(year + 1)
	})

	test("decreaseYear", () => {
		const year = calendarDomain.currentYear

		calendarDomain.decreaseYear()
		expect(calendarDomain.currentYear).toBe(year - 1)
	})
})
