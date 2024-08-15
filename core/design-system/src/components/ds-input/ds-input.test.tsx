import { expect, test } from "@playwright/experimental-ct-react"
import { DSInput, type DSInputProps } from "./index"

const defaultInput: DSInputProps = {
	id: "input",
	type: "text",
	disabled: false,
	readonly: false,
	initialValue: "",
	labelName: "Test Label",
	wrapperLayout: "vertical",
	onChange: () => {},
}

const disabledInput: DSInputProps = {
	...defaultInput,
	disabled: true,
}

const readOnlyInput: DSInputProps = {
	...defaultInput,
	readonly: true,
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSInput", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(<DSInput {...defaultInput} />)

		const inputElement = await component.getByTestId(
			`ds-input-input-${defaultInput.id}`,
		)
		const labelElement = await component.getByTestId(
			`ds-input-label-${defaultInput.id}`,
		)

		await expect(component).toBeVisible()
		await expect(inputElement).toBeVisible()
		await expect(labelElement).toBeVisible()
	})

	test("handles input change", async ({ mount }) => {
		const component = await mount(<DSInput {...defaultInput} />)

		const inputElement = await component.getByTestId(
			`ds-input-input-${defaultInput.id}`,
		)

		await inputElement.type("Test Input")

		await expect(inputElement).toHaveValue("Test Input")
	})

	test("does not allow input when disabled", async ({ mount }) => {
		const component = await mount(<DSInput {...disabledInput} />)

		const inputElement = await component.getByTestId(
			`ds-input-input-${defaultInput.id}`,
		)

		const isInputDisabled = await inputElement.isDisabled()

		await expect(isInputDisabled).toBe(true)
	})

	test("does not allow input when readonly", async ({ mount }) => {
		const component = await mount(<DSInput {...readOnlyInput} />)

		const inputElement = await component.getByTestId(
			`ds-input-input-${defaultInput.id}`,
		)

		const isInputReadonly =
			(await inputElement.getAttribute("readonly")) !== null

		await expect(isInputReadonly).toBe(true)
	})
})
