import { expect, test } from "@playwright/experimental-ct-react"
import { CalendarView } from "../../src/ui/views/calendar.view"

test.describe("calendar", () => {
	test("should follow a typical user scenario", async ({ mount }) => {
		const component = await mount(<CalendarView />)

		await expect(component, "Frame has rendered correct").toHaveAttribute(
			"data-testid",
			"calendar-frame",
		)

		const selectMonth = component.getByTestId("month-switcher-select-select")
		const decreaseYear = component.getByTestId(
			"calendar-year-stepper-button-arrow-bottom",
		)

		await selectMonth.selectOption("1")
		await decreaseYear.click()

		const day = component.getByTestId("calendar-month-days-day-14")

		await expect(day, "day is visible").toBeVisible()
	})
})
