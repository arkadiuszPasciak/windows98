import { expect, test } from "@playwright/experimental-ct-react"
import { SaveFileView } from "../../src/ui/views"

// TODO: run these test after the implementation
test.skip("SaveFile", () => {
	test("when I fill the file name, choose a file type, and click save, the file is saved", async ({
		mount,
	}) => {
		const component = await mount(<SaveFileView />)

		const fileNameInput = component.getByTestId("ds-input-mf-save-file-name")
		await fileNameInput.fill("TestFile")

		const fileTypeSelect = component.getByTestId(
			"ds-select-mf-save-save-as-type",
		)
		await fileTypeSelect.selectOption("text/txt;charset=utf-8;")

		const saveButton = component.getByTestId("mf-save-file-save-button")
		await saveButton.click()
	})

	test("when I click the cancel button, the modal is closed", async ({
		mount,
	}) => {
		const component = await mount(<SaveFileView />)

		const cancelButton = component.getByTestId("mf-save-file-cancel-button")
		await cancelButton.click()

		const saveModal = component.getByTestId("mf-save-file-save-modal")
		await expect(saveModal).toBeHidden()
	})
})
