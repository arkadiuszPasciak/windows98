import { expect, test } from "@playwright/experimental-ct-react"
import { DSTextarea } from "./ds-textarea"
import type { DSTextareaProps } from "./ds-textarea.type"

const defaultTextarea: DSTextareaProps = {
	id: "test-id",
	disabled: false,
	readonly: false,
	initialValue: "",
	labelName: "Test Label",
	wrapperLayout: "vertical",
	onChange: () => {},
}

const disabledTextarea: DSTextareaProps = {
	...defaultTextarea,
	disabled: true,
}

const readOnlyTextarea: DSTextareaProps = {
	...defaultTextarea,
	readonly: true,
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSTextarea", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(<DSTextarea {...defaultTextarea} />)

		const textareaElement = await component.getByTestId(
			`${defaultTextarea.id}-textarea`,
		)
		const labelElement = await component.getByTestId(
			`${defaultTextarea.id}-label`,
		)

		await expect(component).toBeVisible()
		await expect(textareaElement).toBeVisible()
		await expect(labelElement).toBeVisible()
	})

	test("handles textarea change", async ({ mount }) => {
		const component = await mount(<DSTextarea {...defaultTextarea} />)

		const textareaElement = await component.getByTestId(
			`${defaultTextarea.id}-textarea`,
		)

		await textareaElement.type("Test Input")

		await expect(textareaElement).toHaveValue("Test Input")
	})

	test("does not allow input when disabled", async ({ mount }) => {
		const component = await mount(<DSTextarea {...disabledTextarea} />)

		const textareaElement = await component.getByTestId(
			`${defaultTextarea.id}-textarea`,
		)

		const isTextareaDisabled = await textareaElement.isDisabled()

		await expect(isTextareaDisabled).toBe(true)
	})

	test("does not allow input when readonly", async ({ mount }) => {
		const component = await mount(<DSTextarea {...readOnlyTextarea} />)

		const textareaElement = await component.getByTestId(
			`${defaultTextarea.id}-textarea`,
		)

		const isTextareaReadonly =
			(await textareaElement.getAttribute("readonly")) !== null

		await expect(isTextareaReadonly).toBe(true)
	})
})
