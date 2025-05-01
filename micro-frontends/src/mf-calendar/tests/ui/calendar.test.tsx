import { expect, test } from "@playwright/experimental-ct-react"
import { CalendarView } from "../../src/ui/views/calendar.view"

test.describe("calendar", () => {
	test("should follow a typical user scenario", async ({ mount }) => {
		const component = await mount(<CalendarView />)
		await expect(component, "Component has rendered correct").toBeVisible()

		const frame = await component.getByTestId("ds-text-frame-calculator")
		await expect(frame, "Frame has rendered correct").toBeVisible()

		const selectMonth = await component.getByTestId(
			"ds-select-select-month-switcher",
		)
		const decreaseYear = await component.getByTestId(
			"ds-button-arrow-calendar-year-bottom",
		)

		await selectMonth.selectOption("February")
		await decreaseYear.click()

		const day = await component.getByTestId("calendar-month-days-day-14")

		await expect(day, "day is visible").toBeVisible()
	})
})
