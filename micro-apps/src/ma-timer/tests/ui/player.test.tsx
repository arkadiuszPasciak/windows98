import { expect, test } from "@playwright/experimental-ct-react"
import { TimerView } from "../../src/ui/views/timer.view"

test.describe("Player", () => {
	test("should interact with buttons start, stop and reset", async ({
		mount,
	}) => {
		const component = await mount(<TimerView />)

		const preset3min = component.getByTestId("ma-timer-preset-3-minutes-radio")
		await preset3min.click()

		const startStopButton = component.getByTestId(
			"ma-timer-player-start-and-stop-button",
		)
		const resetButton = component.getByTestId("ma-timer-player-reset-button")

		await startStopButton.click()
		expect(startStopButton).toHaveText("Stop")

		await startStopButton.click()
		expect(startStopButton).toHaveText("Start")

		await resetButton.click()
		expect(component.getByTestId("ma-timer-screen-hours")).toHaveText("00")
		expect(component.getByTestId("ma-timer-screen-minutes")).toHaveText("00")
		expect(component.getByTestId("ma-timer-screen-seconds")).toHaveText("00")
	})
})
