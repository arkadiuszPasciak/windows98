import { expect, test } from "@playwright/experimental-ct-react"
import { MFTimer } from "../../src/ui/views"

test.describe("Player", () => {
	test("should interact with buttons start, stop and reset", async ({
		mount,
	}) => {
		const component = await mount(<MFTimer onCloseProgram={() => {}} />)

		const preset3min = component.getByTestId("mf-timer-preset-3-minutes-radio")
		await preset3min.click()

		const startStopButton = component.getByTestId(
			"mf-timer-player-start-and-stop-button",
		)
		const resetButton = component.getByTestId("mf-timer-player-reset-button")

		await startStopButton.click()
		expect(startStopButton).toHaveText("Stop")

		await startStopButton.click()
		expect(startStopButton).toHaveText("Start")

		await resetButton.click()
		expect(component.getByTestId("mf-timer-screen-hours")).toHaveText("00")
		expect(component.getByTestId("mf-timer-screen-minutes")).toHaveText("00")
		expect(component.getByTestId("mf-timer-screen-seconds")).toHaveText("00")
	})
})
