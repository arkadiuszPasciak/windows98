import { expect, test } from "@playwright/experimental-ct-react"
import { MFCaseConverter } from "../../src/ui/views"

test.describe("CaseConverter", async () => {
	test("should update all case outputs when input is 'Hello world'", async ({
		mount,
	}) => {
		const component = await mount(<MFCaseConverter onCloseProgram={() => {}} />)

		await expect(
			component.getByTestId("mf-case-converter-modal-container"),
			"Should render the modal window",
		).toBeVisible()

		const input = component.getByTestId("mf-case-converter-case-input-input")
		await input.fill("Hello world")

		await expect(
			component.getByTestId("mf-case-converter-alternatecase-case-input-input"),
		).toHaveValue("hElLo wOrLd")
		await expect(
			component.getByTestId("mf-case-converter-camelcase-case-input-input"),
		).toHaveValue("helloWorld")
		await expect(
			component.getByTestId("mf-case-converter-constantcase-case-input-input"),
		).toHaveValue("HELLO_WORLD")
		await expect(
			component.getByTestId("mf-case-converter-dotcase-case-input-input"),
		).toHaveValue("hello.world")
		await expect(
			component.getByTestId("mf-case-converter-kebabcase-case-input-input"),
		).toHaveValue("hello-world")
		await expect(
			component.getByTestId("mf-case-converter-lowercase-case-input-input"),
		).toHaveValue("hello world")
		await expect(
			component.getByTestId("mf-case-converter-pascalcase-case-input-input"),
		).toHaveValue("HelloWorld")
		await expect(
			component.getByTestId("mf-case-converter-pathcase-case-input-input"),
		).toHaveValue("hello/world")
		await expect(
			component.getByTestId("mf-case-converter-sentencecase-case-input-input"),
		).toHaveValue("Hello world")
		await expect(
			component.getByTestId("mf-case-converter-snakecase-case-input-input"),
		).toHaveValue("hello_world")
		await expect(
			component.getByTestId("mf-case-converter-titlecase-case-input-input"),
		).toHaveValue("Hello World")
		await expect(
			component.getByTestId("mf-case-converter-uppercase-case-input-input"),
		).toHaveValue("HELLO WORLD")
	})
})
