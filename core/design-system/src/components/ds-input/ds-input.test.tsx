import { expect, test } from "@playwright/experimental-ct-react"
import { DSInput, type DSInputProps } from "./index"

const defaultInput: DSInputProps = {
	id: "your-name",
	type: "text",
	disabled: false,
	readonly: false,
	initialValue: "",
	labelName: "Test Label",
	wrapperLayout: "vertical",
	onChange: () => {},
	placeholder: "Enter your name",
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

		const inputElement = component.getByTestId(`${defaultInput.id}-input-input`)
		const labelElement = component.getByTestId(`${defaultInput.id}-input-label`)

		await expect(component).toHaveAttribute(
			"data-testid",
			`${defaultInput.id}-input-wrapper`,
		)
		await expect(component).toHaveAttribute("data-wrapper", "vertical")
		await expect(component).toHaveAttribute("data-state", "active")

		await expect(inputElement).toHaveAttribute("id", `${defaultInput.id}-input`)
		await expect(inputElement).toHaveAttribute(
			"name",
			`${defaultInput.id}-input`,
		)
		await expect(inputElement).toHaveAttribute(
			"placeholder",
			defaultInput.placeholder ?? "",
		)

		await expect(labelElement).toHaveAttribute(
			"for",
			`${defaultInput.id}-input`,
		)
	})

	test("handles input change", async ({ mount }) => {
		const component = await mount(<DSInput {...defaultInput} />)

		const inputElement = component.getByTestId(`${defaultInput.id}-input-input`)

		await inputElement.type("Test Input")

		await expect(inputElement).toHaveValue("Test Input")
	})

	test("does not allow input when disabled", async ({ mount }) => {
		const component = await mount(<DSInput {...disabledInput} />)

		const inputElement = component.getByTestId(`${defaultInput.id}-input-input`)

		const isInputDisabled = await inputElement.isDisabled()

		expect(isInputDisabled).toBe(true)
	})

	test("does not allow input when readonly", async ({ mount }) => {
		const component = await mount(<DSInput {...readOnlyInput} />)

		const inputElement = component.getByTestId(`${defaultInput.id}-input-input`)

		const isInputReadonly =
			(await inputElement.getAttribute("readonly")) !== null

		expect(isInputReadonly).toBe(true)
	})
})
