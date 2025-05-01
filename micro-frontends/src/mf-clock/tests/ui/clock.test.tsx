import { expect, test } from "@playwright/experimental-ct-react"
import { ClockView } from "../../src/ui/views"

test.describe("Clock", () => {
	test.beforeEach(async ({ page }) => {
		await page.clock.install()
	})

	test("should update time correctly", async ({ mount, page }) => {
		const component = await mount(<ClockView />)
		const initialTime = await component.getByTestId("mf-clock-time").innerText()

		await page.clock.fastForward("30:00")

		const updatedTime = await component.getByTestId("mf-clock-time").innerText()

		expect(updatedTime).not.toBe(initialTime)
	})

	test("should not update time if the time is the same", async ({ mount }) => {
		const component = await mount(<ClockView />)
		const initialTime = await component.getByTestId("mf-clock-time").innerText()
		const sameTime = await component.getByTestId("mf-clock-time").innerText()

		expect(sameTime).toBe(initialTime)
	})
})
