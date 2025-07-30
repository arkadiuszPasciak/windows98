import { expect, test } from "@playwright/experimental-ct-react"
import { DSCheckbox } from "./ds-checkbox"
import type { DSCheckboxProps } from "./ds-checkbox.type"

const defaultCheckboxProps: DSCheckboxProps = {
	id: "default-checkbox",
	name: "default-checkbox",
	text: "Default Checkbox",
	initialChecked: false,
	onChange: () => {},
	readonly: false,
}

const disabledCheckbox: DSCheckboxProps = {
	...defaultCheckboxProps,
	disabled: true,
}

const readOnlyCheckbox: DSCheckboxProps = {
	...defaultCheckboxProps,
	readonly: true,
}

const initialCheckedCheckbox: DSCheckboxProps = {
	...defaultCheckboxProps,
	initialChecked: true,
}

test.describe("DSCheckbox", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(<DSCheckbox {...defaultCheckboxProps} />)

		const inputElement = component.getByTestId(
			`${defaultCheckboxProps.id}-checkbox-input`,
		)
		const text = component.getByTestId(
			`${defaultCheckboxProps.id}-checkbox-text`,
		)

		await expect(component).toHaveAttribute(
			"data-testid",
			`${defaultCheckboxProps.id}-checkbox-label`,
		)
		await expect(component).toHaveAttribute(
			"aria-label",
			defaultCheckboxProps.text,
		)
		await expect(component).toHaveAttribute(
			"for",
			`${defaultCheckboxProps.id}-checkbox`,
		)

		await expect(inputElement).toHaveRole("checkbox")
		await expect(inputElement).toHaveAttribute(
			"id",
			`${defaultCheckboxProps.id}-checkbox`,
		)
		await expect(inputElement).toHaveAttribute("type", "checkbox")
		await expect(inputElement).toHaveAttribute(
			"name",
			defaultCheckboxProps.name,
		)

		await expect(text).toHaveText(defaultCheckboxProps.text)
	})

	test("handles input change", async ({ mount }) => {
		const component = await mount(<DSCheckbox {...defaultCheckboxProps} />)

		const inputElement = await component.getByTestId(
			`${defaultCheckboxProps.id}-checkbox-input`,
		)

		await inputElement.click()

		await expect(inputElement).toBeChecked()

		await inputElement.click()

		await expect(inputElement).not.toBeChecked()
	})

	test("does not allow input when disabled", async ({ mount }) => {
		const component = await mount(<DSCheckbox {...disabledCheckbox} />)

		const inputElement = component.getByTestId(
			`${defaultCheckboxProps.id}-checkbox-input`,
		)

		const isInputDisabled = await inputElement.getAttribute("disabled")

		expect(isInputDisabled).not.toBeNull()
	})

	test("does not allow input when readonly", async ({ mount }) => {
		const component = await mount(<DSCheckbox {...readOnlyCheckbox} />)

		const inputElement = component.getByTestId(
			`${defaultCheckboxProps.id}-checkbox-input`,
		)

		const isInputReadonly = await inputElement.getAttribute("readonly")

		expect(isInputReadonly).not.toBeNull()
	})

	test("initially checked state", async ({ mount }) => {
		const component = await mount(<DSCheckbox {...initialCheckedCheckbox} />)

		const inputElement = component.getByTestId(
			`${defaultCheckboxProps.id}-checkbox-input`,
		)

		await expect(inputElement).toBeChecked()
	})
})
