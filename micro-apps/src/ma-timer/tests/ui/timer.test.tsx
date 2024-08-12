import { expect, test } from "@playwright/experimental-ct-react"
import { TimerView } from '../../src/ui/views'

test.describe("Timer", () => {
	test("should follow a typical user scenario", async ({ mount, page }) => {
		const component = await mount(<TimerView />)

		const customPreset = component.getByTestId("ma-timer-preset-custom-radio")
		await customPreset.click()

		const secondsUpButton = component.getByTestId("ds-button-arrow-seconds-top")
		for (let index = 0; index < 5; index++) {
			await secondsUpButton.click()
		}

		const screenSeconds = component.getByTestId("ma-timer-screen-seconds")
		await expect(screenSeconds, "Screen should display 5 seconds after increasing 5 times").toHaveText("05")

		const startStopButton = component.getByTestId("ma-timer-player-start-and-stop-button")
		await startStopButton.click()
		await expect(startStopButton, "Button should display 'Stop' after starting the timer").toHaveText("Stop")

		await page.waitForTimeout(2000)
		await startStopButton.click()
		await expect(startStopButton, "Button should display 'Start' after pausing the timer").toHaveText("Start")

		await startStopButton.click()
		await expect(startStopButton, "Button should display 'Stop' after restarting the timer").toHaveText("Stop")

		await expect(component.getByTestId("ma-timer-screen-seconds"), "Seconds should be 00 after timer finishes").toHaveText("00", { timeout: 10000 })
		await expect(component.getByTestId("ma-timer-screen-minutes"), "Minutes should be 00 after timer finishes").toHaveText("00", { timeout: 10000 })
		await expect(component.getByTestId("ma-timer-screen-hours"), "Hours should be 00 after timer finishes").toHaveText("00", { timeout: 10000 })
	})
})