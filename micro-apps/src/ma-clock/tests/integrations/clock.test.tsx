import { expect, test } from "@playwright/experimental-ct-react"
import { ClockView } from "../../src/ui/views/clock.view"

test.describe("clock", () => {
	test("time is correct", async ({ mount, page }) => {
		await page.evaluate(() => {
			Date.prototype.toLocaleString = () => "07:50"
		})

		const component = await mount(<ClockView />)

		const time = await component.getByTestId("ds-text-time-short")

		expect(time).toBeVisible()
	})
})
