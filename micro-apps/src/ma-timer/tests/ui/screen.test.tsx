import { expect, test } from "@playwright/experimental-ct-react"
import { TimerView } from '../../src/ui/views'

test.describe("Screen", () => {
	test("should update screen when a preset is chosen", async ({ mount }) => {
		const component = await mount(<TimerView />)

		const preset3Minutes = component.getByTestId("ma-timer-preset-3-minutes-radio")
		await preset3Minutes.click()
		await expect(component.getByTestId("ma-timer-screen-minutes"), "Screen should display 03 minutes").toHaveText("03")
		await expect(component.getByTestId("ma-timer-screen-seconds"), "Screen should display 00 seconds").toHaveText("00")
	})

	test("should update screen when hours/minutes/seconds are increased or decreased", async ({ mount }) => {
		const component = await mount(<TimerView />)

		const hoursUpButton = component.getByTestId("ds-button-arrow-hours-top")
		await hoursUpButton.click()
		await expect(component.getByTestId("ma-timer-screen-hours"), "Screen should display 01 hour after increase").toHaveText("01")

		const hoursDownButton = component.getByTestId("ds-button-arrow-hours-bottom")
		await hoursDownButton.click()
		await expect(component.getByTestId("ma-timer-screen-hours"), "Screen should display 00 hours after decrease").toHaveText("00")

		const minutesUpButton = component.getByTestId("ds-button-arrow-minutes-top")
		await minutesUpButton.click()
		await expect(component.getByTestId("ma-timer-screen-minutes"), "Screen should display 01 minute after increase").toHaveText("01")

		const minutesDownButton = component.getByTestId("ds-button-arrow-minutes-bottom")
		await minutesDownButton.click()
		await expect(component.getByTestId("ma-timer-screen-minutes"), "Screen should display 00 minutes after decrease").toHaveText("00")

		const secondsUpButton = component.getByTestId("ds-button-arrow-seconds-top")
		await secondsUpButton.click()
		await expect(component.getByTestId("ma-timer-screen-seconds"), "Screen should display 01 second after increase").toHaveText("01")

		const secondsDownButton = component.getByTestId("ds-button-arrow-seconds-bottom")
		await secondsDownButton.click()
		await expect(component.getByTestId("ma-timer-screen-seconds"), "Screen should display 00 seconds after decrease").toHaveText("00")
	})
})