import path from "node:path"
import { expect, test } from "@playwright/experimental-ct-react"
import { MFImageConverter } from "../../src/ui/views"

const testData = {
	sourceFileName: "test-image.png",
	sourceFilePath: "./src/mf-image-converter/tests/ui",
	outputFileName: "converted-image.webp",
	outputFileFormat: "image/webp",
}

test.describe("ImageConverter", () => {
	test("As a user, I can open an image, select format, convert and download, and see correct button states", async ({
		mount,
		page,
	}) => {
		const component = await mount(
			<MFImageConverter onCloseProgram={() => {}} />,
		)

		await expect(
			component.getByTestId("mf-image-converter-modal-container"),
			"Should render the modal window",
		).toBeVisible()

		await expect(
			component.getByTestId("mf-image-converter-convert-image-button"),
			"Convert button should be disabled before image is loaded",
		).toBeDisabled()

		await expect(
			component.getByTestId("mf-image-converter-download-image-button"),
			"Download button should be disabled before conversion",
		).toBeDisabled()

		const fileChooserPromise = page.waitForEvent("filechooser")
		await component.getByTestId("mf-image-converter-open-image-button").click()
		const fileChooser = await fileChooserPromise

		const filePath = path.resolve(
			testData.sourceFilePath,
			testData.sourceFileName,
		)
		await fileChooser.setFiles(filePath)

		const formatSelect = component.getByTestId(
			"mf-image-converter-image-format-select-select",
		)
		await formatSelect.selectOption(testData.outputFileFormat)

		const convertButton = component.getByTestId(
			"mf-image-converter-convert-image-button",
		)
		await expect(
			convertButton,
			"Convert button should be enabled after image is loaded",
		).toBeEnabled()
		await convertButton.click()

		const downloadButton = component.getByTestId(
			"mf-image-converter-download-image-button",
		)
		await expect(
			downloadButton,
			"Download button should be enabled after conversion",
		).toBeEnabled()

		const downloadPromise = page.waitForEvent("download")
		await downloadButton.click()
		const download = await downloadPromise

		expect(
			download.suggestedFilename(),
			"Downloaded file should have correct name",
		).toBe(testData.outputFileName)
	})
})
