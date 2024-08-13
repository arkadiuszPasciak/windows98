import { expect, test } from "@playwright/experimental-ct-react"
import { TimerView } from "../../src/ui/views/timer.view"

const presets = [
	{
		dataTestId: "ma-timer-preset-3-minutes-radio",
		expectTime: {
			hours: "00",
			minutes: "03",
			seconds: "00",
		}
	},
	{
		dataTestId: "ma-timer-preset-5-minutes-radio",
		expectTime: {
			hours: "00",
			minutes: "05",
			seconds: "00",
		}
	},
	{
		dataTestId: "ma-timer-preset-10-minutes-radio",
		expectTime: {
			hours: "00",
			minutes: "10",
			seconds: "00",
		}
	},
	{
		dataTestId: "ma-timer-preset-15-minutes-radio",
		expectTime: {
			hours: "00",
			minutes: "15",
			seconds: "00",
		}
	},
	{
		dataTestId: "ma-timer-preset-custom-radio",
		expectTime: {
			hours: "00",
			minutes: "00",
			seconds: "00",
		}
	},
]

test.describe("Presets", () => {
	test("should interact with presets 3 minutes, 5 minutes, 10 minutes, 15 minutes and custom", async ({ mount }) => {
		const component = await mount(<TimerView />)

		const hours = component.getByTestId("ma-timer-screen-hours")
		const minutes = component.getByTestId("ma-timer-screen-minutes")
		const seconds = component.getByTestId("ma-timer-screen-seconds")

		for (const preset of presets) {
			const presetElement = component.getByTestId(preset.dataTestId)
			await presetElement.click()

			await expect(hours).toHaveText(preset.expectTime.hours)
			await expect(minutes).toHaveText(preset.expectTime.minutes)
			await expect(seconds).toHaveText(preset.expectTime.seconds)
		}
	})
})