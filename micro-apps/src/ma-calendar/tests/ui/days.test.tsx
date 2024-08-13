import { expect, test } from "@playwright/experimental-ct-react"
import { CalendarView } from "../../src/ui/views/calendar.view"

test.describe("Days", () => {
	test("generates correct amount of days", async ({ mount }) => {
		const component = await mount(<CalendarView />)

		const today = new Date()
		const year = today.getFullYear()
		const month = today.getMonth()
		const daysInMonth = new Date(year, month + 1, 0).getDate()

		for (let day = 1; day < daysInMonth + 1; day++) {
			const dayElement = await component.getByTestId(`calendar-month-days-day-${day}`)
			await expect(dayElement, "day element to be visible").toBeVisible()
		}

		for (let noMoreDay = daysInMonth + 1; noMoreDay <= 31; noMoreDay++) {
			const noMoreDayElement = await component.getByTestId(`calendar-month-days-day-${noMoreDay}`)
			await expect(noMoreDayElement, "no more day elements to exist").toHaveCount(0)
		}
	})
})
