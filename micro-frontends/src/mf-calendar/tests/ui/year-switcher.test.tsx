import { expect, test } from "@playwright/experimental-ct-react"
import { CalendarView } from "../../src/ui/views/calendar.view"

test.describe("Year switcher", () => {
	test("selects years", async ({ mount }) => {
		const component = await mount(<CalendarView />)

		const today = new Date()
		const currentYear = today.getFullYear()
		const nextYear = currentYear + 1
		const previousYear = currentYear - 1

		const input = component.getByTestId("ds-input-input-stepper-calendar-year")
		const increaseYear = component.getByTestId(
			"ds-button-arrow-calendar-year-top",
		)
		const decreaseYear = component.getByTestId(
			"ds-button-arrow-calendar-year-bottom",
		)

		await expect(input, "input has the initial year value").toHaveValue(
			String(currentYear),
		)

		await increaseYear.click()

		await expect(input, "input has the incremented year value").toHaveValue(
			String(nextYear),
		)

		await decreaseYear.click()

		await expect(input, "input has the decremented year value").toHaveValue(
			String(previousYear),
		)
	})
})
