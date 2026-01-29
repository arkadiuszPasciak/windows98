import { expect, test } from "@playwright/experimental-ct-react"
import { MFSoundRecorder } from "../../src/ui/views"

test.describe("SoundRecorder", () => {
	test("As a user, I start recording, stop recording, download the sound, and see correct button states", async ({
		mount,
	}) => {
		const component = await mount(<MFSoundRecorder onCloseProgram={() => {}} />)

		await expect(
			component.getByTestId("mf-sound-recorder-modal-container"),
			"Should render the modal window",
		).toBeVisible()

		await expect(
			component.getByTestId("mf-sound-recorder-information-text"),
			"Should render the information text",
		).toBeVisible()

		const startButton = component.getByTestId(
			"mf-sound-recorder-start-recording-button",
		)
		const stopButton = component.getByTestId(
			"mf-sound-recorder-stop-recording-button",
		)
		const downloadButton = component.getByTestId(
			"mf-sound-recorder-download-sound-button",
		)
		const resetButton = component.getByTestId(
			"mf-sound-recorder-reset-recording-button",
		)

		await expect(
			startButton,
			"Start button should be enabled initially",
		).toBeEnabled()
		await expect(
			stopButton,
			"Stop button should be disabled initially",
		).toBeDisabled()
		await expect(
			downloadButton,
			"Download button should be disabled initially",
		).toBeDisabled()
		await expect(
			resetButton,
			"Reset button should be disabled initially",
		).toBeDisabled()

		await startButton.click()
		await expect(
			startButton,
			"Start button should be disabled while recording",
		).toBeDisabled()
		await expect(
			stopButton,
			"Stop button should be enabled while recording",
		).toBeEnabled()
		await expect(
			downloadButton,
			"Download button should be disabled while recording",
		).toBeDisabled()
		await expect(
			resetButton,
			"Reset button should be disabled while recording",
		).toBeDisabled()

		await stopButton.click()
		await expect(
			startButton,
			"Start button should be disabled after stopping",
		).toBeDisabled()
		await expect(
			stopButton,
			"Stop button should be disabled after stopping",
		).toBeDisabled()
		await expect(
			downloadButton,
			"Download button should be enabled after stopping",
		).toBeEnabled()
		await expect(
			resetButton,
			"Reset button should be enabled after stopping",
		).toBeEnabled()

		// TODO: Uncomment when Playwright download handling is fixed
		// const downloadPromise = page.waitForEvent("download")
		// await downloadButton.click()
		// const download = await downloadPromise

		// expect(
		// 	download.suggestedFilename(),
		// 	"Downloaded file should have correct name",
		// ).toBe("recorded-sound.webm")

		// await resetButton.click()
		// await expect(
		// 	startButton,
		// 	"Start button should be enabled after reset",
		// ).toBeEnabled()
		// await expect(
		// 	stopButton,
		// 	"Stop button should be disabled after reset",
		// ).toBeDisabled()
		// await expect(
		// 	downloadButton,
		// 	"Download button should be disabled after reset",
		// ).toBeDisabled()
		// await expect(
		// 	resetButton,
		// 	"Reset button should be disabled after reset",
		// ).toBeDisabled()
	})
})
