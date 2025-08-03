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

		const textareaElement = component.getByTestId(
			`${defaultTextarea.id}-textarea-textarea`,
		)
		const labelElement = component.getByTestId(
			`${defaultTextarea.id}-textarea-label`,
		)

		await expect(component).toHaveAttribute(
			"data-testid",
			`${defaultTextarea.id}-textarea-wrapper`,
		)
		await expect(component).toHaveAttribute("data-wrapper", "vertical")
		await expect(component).toHaveAttribute("data-state", "active")

		await expect(textareaElement).toHaveAttribute(
			"id",
			`${defaultTextarea.id}-textarea`,
		)
		await expect(textareaElement).toHaveAttribute(
			"name",
			`${defaultTextarea.id}-textarea`,
		)

		await expect(labelElement).toHaveAttribute(
			"for",
			`${defaultTextarea.id}-textarea`,
		)
	})

	test("handles textarea change", async ({ mount }) => {
		const component = await mount(<DSTextarea {...defaultTextarea} />)

		const textareaElement = component.getByTestId(
			`${defaultTextarea.id}-textarea-textarea`,
		)

		await textareaElement.type("Test Input")

		await expect(textareaElement).toHaveValue("Test Input")
	})

	test("does not allow input when disabled", async ({ mount }) => {
		const component = await mount(<DSTextarea {...disabledTextarea} />)

		const textareaElement = component.getByTestId(
			`${defaultTextarea.id}-textarea-textarea`,
		)

		const isTextareaDisabled = await textareaElement.isDisabled()

		expect(isTextareaDisabled).toBe(true)
	})

	test("does not allow input when readonly", async ({ mount }) => {
		const component = await mount(<DSTextarea {...readOnlyTextarea} />)

		const textareaElement = component.getByTestId(
			`${defaultTextarea.id}-textarea-textarea`,
		)

		const isTextareaReadonly =
			(await textareaElement.getAttribute("readonly")) !== null

		expect(isTextareaReadonly).toBe(true)
	})
})
