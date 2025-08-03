import { expect, test } from "@playwright/experimental-ct-react"
import { CalendarView } from "../../src/ui/views/calendar.view"

test.describe("Month switcher", () => {
	test("select month", async ({ mount }) => {
		const component = await mount(<CalendarView />)
		const select = await component.getByTestId("month-switcher-select-select")

		for (let index = 0; index <= 11; index++) {
			await select.selectOption(String(index))
			await expect(
				select,
				"select element has the correct value after selecting a month",
			).toHaveValue(String(index))
		}
	})
})
