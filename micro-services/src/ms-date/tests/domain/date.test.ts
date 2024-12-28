import { describe, expect, it, vi } from "vitest"
import { DateDomain } from "../../src/domain/domains"
import { EDay, EMonth, type IFormatOptions } from "../../src/domain/models"

const msDate = new DateDomain()

describe("DateDomain", () => {
	describe("getCalendar", () => {
		it("should return the correct number of days in January 1871 with no active day and Sunday as the first day of the week", () => {
			const result = msDate.getCalendar(EMonth.JANUARY, 1871)

			expect(result).toEqual({
				activeDay: null,
				daysInMonth: 31,
				firstDayOfWeek: EDay.SUNDAY,
			})
		})

		it("should return the correct number of days in August 1994 with the active day and Monday as the first day of the week", () => {
			const activeDay = 14
			const mockDate = new Date(1994, EMonth.AUGUST, activeDay)
			vi.setSystemTime(mockDate)

			const result = msDate.getCalendar(EMonth.AUGUST, 1994)

			expect(result).toEqual({
				activeDay: activeDay,
				daysInMonth: 31,
				firstDayOfWeek: EDay.MONDAY,
			})

			vi.useRealTimers()
		})
	})

	describe("getDate", () => {
		it("should return formatted date string", () => {
			const value = "2023-10-05"
			const locales = "en-US"
			const options: IFormatOptions = { dateStyle: "long" }

			const result = msDate.getDate(value, locales, options)
			expect(result).toBe(new Date(value).toLocaleDateString(locales, options))
		})

		it("should return current date string if no value is provided", () => {
			const locales = "en-US"
			const options: IFormatOptions = { dateStyle: "long" }

			const result = msDate.getDate(undefined, locales, options)
			expect(result).toBe(new Date().toLocaleDateString(locales, options))
		})

		it("should return current date string if no value and locales are provided", () => {
			const options: IFormatOptions = { dateStyle: "long" }

			const result = msDate.getDate(undefined, undefined, options)
			expect(result).toBe(new Date().toLocaleDateString(undefined, options))
		})

		it("should return current date string if no parameters are provided", () => {
			const locales = "en-US"
			const options: IFormatOptions = { dateStyle: "long" }
			const mockDate = new Date("2023-10-05")
			vi.setSystemTime(mockDate)

			const result = msDate.getDate(undefined, locales, options)
			expect(result).toBe(mockDate.toLocaleDateString(locales, options))

			vi.useRealTimers()
		})
	})

	describe("getDateWithTime", () => {
		it("should return formatted date and time string", () => {
			const value = "2023-10-05T14:48:00.000Z"
			const locales = "en-US"
			const options: IFormatOptions = { dateStyle: "long", timeStyle: "short" }

			const result = msDate.getDateWithTime(value, locales, options)
			expect(result).toBe(new Date(value).toLocaleString(locales, options))
		})

		it("should return current date and time string if no value is provided", () => {
			const locales = "en-US"
			const options: IFormatOptions = { dateStyle: "long", timeStyle: "short" }

			const result = msDate.getDateWithTime(undefined, locales, options)
			expect(result).toBe(new Date().toLocaleString(locales, options))
		})

		it("should return current date and time string if no value and locales are provided", () => {
			const options: IFormatOptions = { dateStyle: "long", timeStyle: "short" }

			const result = msDate.getDateWithTime(undefined, undefined, options)
			expect(result).toBe(new Date().toLocaleString(undefined, options))
		})

		it("should return current date string if no parameters are provided", () => {
			const locales = "en-US"
			const options: IFormatOptions = { dateStyle: "long" }
			const mockDate = new Date("2023-10-05")
			vi.setSystemTime(mockDate)

			const result = msDate.getDate(undefined, locales, options)
			expect(result).toBe(mockDate.toLocaleDateString(locales, options))

			vi.useRealTimers()
		})
	})

	describe("getTime", () => {
		it("should return formatted time string", () => {
			const value = "2023-10-05T14:48:00.000Z"
			const locales = "en-US"
			const options: IFormatOptions = { timeStyle: "medium" }

			const result = msDate.getTime(value, locales, options)
			expect(result).toBe(new Date(value).toLocaleTimeString(locales, options))
		})

		it("should return current time string if no value is provided", () => {
			const locales = "en-US"
			const options: IFormatOptions = { timeStyle: "medium" }

			const result = msDate.getTime(undefined, locales, options)
			expect(result).toBe(new Date().toLocaleTimeString(locales, options))
		})

		it("should return current time string if no value and locales are provided", () => {
			const options: IFormatOptions = { timeStyle: "medium" }

			const result = msDate.getTime(undefined, undefined, options)
			expect(result).toBe(new Date().toLocaleTimeString(undefined, options))
		})

		it("should return current time string if no parameters are provided", () => {
			const mockDate = new Date("2023-10-05T14:48:00.000Z")
			vi.setSystemTime(mockDate)

			const result = msDate.getTime()
			expect(result).toBe(
				new Date(mockDate).toLocaleTimeString("en-US", { timeStyle: "medium" }),
			)

			vi.useRealTimers()
		})
	})
})
