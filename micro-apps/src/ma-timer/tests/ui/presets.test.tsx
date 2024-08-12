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
	test("should interact with presets and update time", async ({ mount }) => {
		const component = await mount(<TimerView />)

		for (const preset of presets) {
			const presetElement = component.getByTestId(preset.dataTestId)
			await presetElement.click()

			const hours = component.getByTestId("ma-timer-screen-hours")
			const minutes = component.getByTestId("ma-timer-screen-minutes")
			const seconds = component.getByTestId("ma-timer-screen-seconds")

			await expect(hours).toHaveValue(preset.expectTime.hours)
			await expect(minutes).toHaveValue(preset.expectTime.minutes)
			await expect(seconds).toHaveValue(preset.expectTime.seconds)
		}
	})
})