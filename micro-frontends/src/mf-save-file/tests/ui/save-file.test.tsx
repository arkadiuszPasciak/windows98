import { expect, test } from "@playwright/experimental-ct-react"
import { SaveFileView } from "../../src/ui/views"

test.describe("SaveFileView", () => {
	test("when I fill the file name, choose a file type, and click save, the file is saved", async ({
		mount,
	}) => {
		let testValue = false
		const component = await mount(
			<SaveFileView
				contentFile="test 123"
				fileTypes={["text-doc", "text-txt"]}
				onCloseModal={() => {
					testValue = true
				}}
			/>,
		)

		const fileNameInput = component.getByTestId(
			"mf-save-file-file-name-input-input",
		)
		await fileNameInput.fill("TestFile")

		const fileTypeSelect = component.getByTestId(
			"mf-save-file-file-type-select-select",
		)
		await fileTypeSelect.selectOption("text-txt")

		const saveButton = component.getByTestId("mf-save-file-save-button")
		await saveButton.click()

		expect(testValue).toBe(true)
	})

	test("when I click the cancel button, the modal is closed", async ({
		mount,
	}) => {
		let testValue = false
		const component = await mount(
			<SaveFileView
				contentFile="test 123"
				fileTypes={["text-doc", "text-txt"]}
				onCloseModal={() => {
					testValue = true
				}}
			/>,
		)

		const cancelButton = component.getByTestId("mf-save-file-cancel-button")
		await cancelButton.click()

		expect(testValue).toBe(true)
	})

	test("renders the modal with correct initial values", async ({ mount }) => {
		const component = await mount(
			<SaveFileView
				contentFile="test 123"
				fileTypes={["text-doc", "text-txt"]}
				onCloseModal={() => {}}
			/>,
		)

		const fileNameInput = component.getByTestId(
			"mf-save-file-file-name-input-input",
		)
		await expect(fileNameInput).toHaveValue("mf-save-file.untitled")

		const fileTypeOption1 = component.getByTestId(
			"mf-save-file-file-type-select-option-0",
		)
		const fileTypeOption2 = component.getByTestId(
			"mf-save-file-file-type-select-option-1",
		)
		await expect(fileTypeOption1).toHaveText("mf-save-file.text-doc")
		await expect(fileTypeOption2).toHaveText("mf-save-file.text-txt")
	})
})
