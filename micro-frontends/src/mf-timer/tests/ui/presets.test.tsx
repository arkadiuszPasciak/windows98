import { expect, test } from "@playwright/experimental-ct-react"
import { MFTimer } from "../../src/ui/views"

const presets = [
	{
		dataTestId: "mf-timer-preset-3-minutes-radio-input",
		expectTime: {
			hours: "00",
			minutes: "03",
			seconds: "00",
		},
	},
	{
		dataTestId: "mf-timer-preset-5-minutes-radio-input",
		expectTime: {
			hours: "00",
			minutes: "05",
			seconds: "00",
		},
	},
	{
		dataTestId: "mf-timer-preset-10-minutes-radio-input",
		expectTime: {
			hours: "00",
			minutes: "10",
			seconds: "00",
		},
	},
	{
		dataTestId: "mf-timer-preset-15-minutes-radio-input",
		expectTime: {
			hours: "00",
			minutes: "15",
			seconds: "00",
		},
	},
	{
		dataTestId: "mf-timer-preset-custom-radio-input",
		expectTime: {
			hours: "00",
			minutes: "00",
			seconds: "00",
		},
	},
]

test.describe("Presets", () => {
	test("should interact with presets 3 minutes, 5 minutes, 10 minutes, 15 minutes and custom", async ({
		mount,
	}) => {
		const component = await mount(<MFTimer onCloseProgram={() => {}} />)

		const hours = component.getByTestId("mf-timer-screen-hours")
		const minutes = component.getByTestId("mf-timer-screen-minutes")
		const seconds = component.getByTestId("mf-timer-screen-seconds")

		for (const preset of presets) {
			const presetElement = component.getByTestId(preset.dataTestId)
			await presetElement.click()

			await expect(hours).toHaveText(preset.expectTime.hours)
			await expect(minutes).toHaveText(preset.expectTime.minutes)
			await expect(seconds).toHaveText(preset.expectTime.seconds)
		}
	})
})
