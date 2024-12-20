import { describe, expect, it, vi } from "vitest"
import { DateDomain } from "../../src/domain/domains"
import type { IFormatOptions } from "../../src/domain/models"

const msDate = new DateDomain()

describe("DateDomain", () => {
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

		it("should return current date and time string if no parameters are provided", () => {
			const mockDate = new Date("2023-10-05T14:48:00.000Z")
			vi.setSystemTime(mockDate)

			const result = msDate.getDateWithTime()
			expect(result).toBe("10/5/2023, 4:48:00 PM")

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
			expect(result).toBe("4:48:00 PM")

			vi.useRealTimers()
		})
	})
})
