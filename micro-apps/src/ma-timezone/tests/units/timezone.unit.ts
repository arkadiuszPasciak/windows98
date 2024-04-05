import { expect, describe, test } from "vitest"
import TimezoneService from "../../src/domain/services/timezone.service"
import TimezoneRepository from "../../src/data/repositories/timezone.repository"

describe("TimezoneService", () => {
	const calendarService = new TimezoneService()

	test("initial state", () => {
		expect(calendarService.timezoneRepository).toStrictEqual(new TimezoneRepository())
		expect(calendarService.timezonesValuePairs).toBeNull()
	})

	test("generateTimezones", () => {
		calendarService.generateTimezones()

		expect(calendarService.timezonesValuePairs).toStrictEqual([
			{ value: -12, label: "ma-timezone.stepper.-12" },
			{ value: -11, label: "ma-timezone.stepper.-11" },
			{ value: -10, label: "ma-timezone.stepper.-10" },
			{ value: -9, label: "ma-timezone.stepper.-9" },
			{ value: -8, label: "ma-timezone.stepper.-8" },
			{ value: -7, label: "ma-timezone.stepper.-7" },
			{ value: -6, label: "ma-timezone.stepper.-6" },
			{ value: -5, label: "ma-timezone.stepper.-5" },
			{ value: -4, label: "ma-timezone.stepper.-4" },
			{ value: -3, label: "ma-timezone.stepper.-3" },
			{ value: -2, label: "ma-timezone.stepper.-2" },
			{ value: -1, label: "ma-timezone.stepper.-1" },
			{ value: 0, label: "ma-timezone.stepper.0" },
			{ value: 1, label: "ma-timezone.stepper.1" },
			{ value: 2, label: "ma-timezone.stepper.2" },
			{ value: 3, label: "ma-timezone.stepper.3" },
			{ value: 4, label: "ma-timezone.stepper.4" },
			{ value: 5, label: "ma-timezone.stepper.5" },
			{ value: 6, label: "ma-timezone.stepper.6" },
			{ value: 7, label: "ma-timezone.stepper.7" },
			{ value: 8, label: "ma-timezone.stepper.8" },
			{ value: 9, label: "ma-timezone.stepper.9" },
			{ value: 10, label: "ma-timezone.stepper.10" },
			{ value: 11, label: "ma-timezone.stepper.11" },
			{ value: 12, label: "ma-timezone.stepper.12" },
		])
	})
})
