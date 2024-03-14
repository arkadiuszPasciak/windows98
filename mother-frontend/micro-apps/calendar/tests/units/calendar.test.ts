import { expect, describe, test } from "vitest"
import CalendarService from "../../src/domain/services/calendar.service"

describe("CalendarService", () => {
	const calendarService = new CalendarService()

	test("initial state", () => {
		expect(calendarService.calendar).toBeNull()
		expect(calendarService.year).toBeNull()
		expect(calendarService.month).toBeNull()
	})

	test("generateCalendar", () => {
		calendarService.generateCalendar(new Date(2022, 1, 1))
		expect(calendarService.year).toBe(2022)
		expect(calendarService.month).toBe(1)
	})

	test("changeCalendarByYear", () => {
		calendarService.generateCalendar(new Date(2021, 1, 1))
		calendarService.changeCalendarByYear()

		expect(calendarService.year).toBe(2021)
		expect(calendarService.month).toBe(1)
	})

	test("changeCalendarByMonth", () => {
		calendarService.generateCalendar(new Date(2022, 2, 1))
		calendarService.changeCalendarByMonth(2)

		expect(calendarService.year).toBe(2022)
		expect(calendarService.month).toBe(2)
	})

	test("increaseYear", () => {
		calendarService.generateCalendar(new Date(2022, 2, 1))
		calendarService.increaseYear()

		expect(calendarService.year).toBe(2023)
	})

	test("decreaseYear", () => {
		calendarService.generateCalendar(new Date(2022, 2, 1))
		calendarService.decreaseYear()

		expect(calendarService.year).toBe(2021)
	})
})
