import { expect, test } from "@playwright/experimental-ct-react"
import { CalendarView } from "../../src/ui/views/calendar.view"

test.describe("Year switcher", () => {
	test("selects years", async ({ mount }) => {
		const component = await mount(<CalendarView />)

		const today = new Date()
		let year = today.getFullYear()

		const input = await component.getByTestId("ds-input-input-stepper-calendar-year")
		const increaseYear = await component.getByTestId("ds-button-arrow-calendar-year-top")
		const decreaseYear = await component.getByTestId("ds-button-arrow-calendar-year-bottom")

		await expect(input, "input has the initial year value").toHaveValue(String(year))

		await increaseYear.click()

		await expect(input, "input has the incremented year value").toHaveValue(String(year += 1))

		await decreaseYear.click()

		await expect(input, "input has the decremented year value").toHaveValue(String(year -= 1))
	})
})
