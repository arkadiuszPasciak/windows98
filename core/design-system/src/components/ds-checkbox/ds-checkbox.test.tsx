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

test.describe("DSCheckbox", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(<DSCheckbox {...defaultCheckboxProps} />)

		const inputElement = component.getByTestId(
			`${defaultCheckboxProps.id}-checkbox-input`,
		)
		const text = component.getByTestId(`ds-text-${defaultCheckboxProps.id}`)

		await expect(component).toBeVisible()
		await expect(inputElement).toBeVisible()
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
})
