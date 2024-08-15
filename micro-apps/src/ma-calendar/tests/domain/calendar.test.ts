import { describe, expect, test } from "vitest"
import { CalendarDomain } from "../../src/domain/domains"

describe("CalendarDomain", () => {
	const calendarDomain = new CalendarDomain()

	test("initial state", () => {
		expect(calendarDomain.calendar).toBeNull()
		expect(calendarDomain.year).toBeNull()
		expect(calendarDomain.month).toBeNull()
	})

	test("generateCalendar", () => {
		calendarDomain.generateCalendar(new Date(2022, 1, 1))
		expect(calendarDomain.year).toBe(2022)
		expect(calendarDomain.month).toBe(1)
	})

	test("changeCalendarByYear", () => {
		calendarDomain.generateCalendar(new Date(2021, 1, 1))
		calendarDomain.changeCalendarByYear()

		expect(calendarDomain.year).toBe(2021)
		expect(calendarDomain.month).toBe(1)
	})

	test("changeCalendarByMonth", () => {
		calendarDomain.generateCalendar(new Date(2022, 2, 1))
		calendarDomain.changeCalendarByMonth(2)

		expect(calendarDomain.year).toBe(2022)
		expect(calendarDomain.month).toBe(2)
	})

	test("increaseYear", () => {
		calendarDomain.generateCalendar(new Date(2022, 2, 1))
		calendarDomain.increaseYear()

		expect(calendarDomain.year).toBe(2023)
	})

	test("decreaseYear", () => {
		calendarDomain.generateCalendar(new Date(2022, 2, 1))
		calendarDomain.decreaseYear()

		expect(calendarDomain.year).toBe(2021)
	})
})
