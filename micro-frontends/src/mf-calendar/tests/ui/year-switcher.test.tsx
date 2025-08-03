import { expect, test } from "@playwright/experimental-ct-react"
import { CalendarView } from "../../src/ui/views/calendar.view"

test.describe("Year switcher", () => {
	test("selects years", async ({ mount }) => {
		const component = await mount(<CalendarView />)

		const today = new Date()
		const currentYear = today.getFullYear()
		const nextYear = currentYear + 1
		const previousYear = currentYear - 1

		const input = component.getByTestId(
			"calendar-year-stepper-input-input-input",
		)
		const increaseYear = component.getByTestId(
			"calendar-year-stepper-button-arrow-top",
		)
		const decreaseYear = component.getByTestId(
			"calendar-year-stepper-button-arrow-bottom",
		)

		await expect(input, "input is visible").toBeVisible()

		await expect(input, "input has the initial year value").toHaveValue(
			String(currentYear),
		)

		await increaseYear.click()

		await expect(input, "input has the incremented year value").toHaveValue(
			String(nextYear),
		)

		await decreaseYear.click()

		await decreaseYear.click()

		await expect(input, "input has the decremented year value").toHaveValue(
			String(previousYear),
		)
	})
})
