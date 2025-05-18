import path from "node:path"
import { expect, test } from "@playwright/experimental-ct-react"
import { NotepadView } from "../../src/ui/views"

test.describe("Notepad", () => {
	test("As a user, I can save the content written in the textarea", async ({
		mount,
	}) => {
		const component = await mount(
			<NotepadView onCloseProgram={() => console.log("notepad is closed!")} />,
		)

		const saveButton = component.getByTestId("mf-notepad-save-file-button")
		await saveButton.click()

		const saveFileModal = component.getByTestId("mf-save-file-modal-container")

		expect(saveFileModal).toBeVisible()
		// Specific saving file you can find in mf-save-file
	})

	test("As a user, I can open a file and see its content in the textarea", async ({
		mount,
		page,
	}) => {
		const component = await mount(
			<NotepadView onCloseProgram={() => console.log("notepad is closed!")} />,
		)

		const fileChooserPromise = page.waitForEvent("filechooser")
		await component.getByTestId("mf-notepad-open-file-button").click()
		const fileChooser = await fileChooserPromise

		const filePath = path.resolve("./src/mf-notepad/tests/ui", "test-file.txt")
		await fileChooser.setFiles(filePath)

		const textarea = component.getByTestId("mf-notepad-textarea")
		const updatedContent = await textarea.inputValue()

		expect(updatedContent).toBe("Expected file content")
	})
})
