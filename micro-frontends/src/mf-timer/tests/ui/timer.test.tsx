import { expect, test } from "@playwright/experimental-ct-react"
import { MFTimer } from "../../src/ui/views"

test.describe("Timer", () => {
	test("should follow a typical user scenario", async ({ mount, page }) => {
		const component = await mount(<MFTimer onCloseProgram={() => {}} />)

		const customPreset = component.getByTestId(
			"mf-timer-preset-custom-radio-input",
		)
		await customPreset.click()

		const secondsUpButton = component.getByTestId(
			"seconds-stepper-button-arrow-top",
		)
		for (let index = 0; index < 5; index++) {
			await secondsUpButton.click()
		}

		const screenSeconds = component.getByTestId("mf-timer-screen-seconds")
		await expect(
			screenSeconds,
			"Screen should display 5 seconds after increasing 5 times",
		).toHaveText("05")

		const startStopButton = component.getByTestId(
			"mf-timer-player-start-and-stop-button",
		)
		await startStopButton.click()
		await expect(
			startStopButton,
			"Button should display 'Stop' after starting the timer",
		).toHaveText("mf-timer.stop")

		await page.waitForTimeout(2000)
		await startStopButton.click()
		await expect(
			startStopButton,
			"Button should display 'Start' after pausing the timer",
		).toHaveText("mf-timer.start")

		await startStopButton.click()
		await expect(
			startStopButton,
			"Button should display 'Stop' after restarting the timer",
		).toHaveText("mf-timer.stop")

		await expect(
			component.getByTestId("mf-timer-screen-seconds"),
			"Seconds should be 00 after timer finishes",
		).toHaveText("00", { timeout: 10000 })
		await expect(
			component.getByTestId("mf-timer-screen-minutes"),
			"Minutes should be 00 after timer finishes",
		).toHaveText("00", { timeout: 10000 })
		await expect(
			component.getByTestId("mf-timer-screen-hours"),
			"Hours should be 00 after timer finishes",
		).toHaveText("00", { timeout: 10000 })
	})
})
