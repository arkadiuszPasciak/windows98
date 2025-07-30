import { expect, test } from "@playwright/experimental-ct-react"
import { DSRadio } from "./ds-radio"
import type { DSRadioProps } from "./ds-radio.type"

const defaultRadioProps: DSRadioProps = {
	id: "rodo",
	name: "rodo-1",
	initialChecked: false,
	text: { content: "Agree your rodo", visible: true },
	onChange: () => {},
}

const disabledRadioProps: DSRadioProps = {
	...defaultRadioProps,
	disabled: true,
}

const checkedRadioProps: DSRadioProps = {
	...defaultRadioProps,
	initialChecked: true,
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSRadio", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(<DSRadio {...defaultRadioProps} />)

		const inputElement = component.getByTestId(
			`${defaultRadioProps.id}-radio-input`,
		)
		const iconElement = component.getByTestId(
			`${defaultRadioProps.id}-radio-icon`,
		)
		const textElement = component.getByTestId(
			`${defaultRadioProps.id}-radio-text`,
		)

		await expect(component).toHaveAttribute(
			"data-testid",
			`${defaultRadioProps.id}-radio-label`,
		)
		await expect(component).toHaveAttribute(
			"for",
			`${defaultRadioProps.id}-radio`,
		)
		await expect(component).toHaveAttribute("data-state", "active")

		await expect(inputElement).toHaveAttribute("type", "radio")
		await expect(inputElement).toHaveAttribute(
			"id",
			`${defaultRadioProps.id}-radio`,
		)
		await expect(inputElement).toHaveAttribute(
			"name",
			`${defaultRadioProps.name}`,
		)
		await expect(inputElement).toHaveAttribute(
			"value",
			`${defaultRadioProps.id}`,
		)

		await expect(iconElement).toBeVisible()

		if (defaultRadioProps.text.visible) {
			await expect(textElement).toBeVisible()
		}
	})

	test("checked single radio change", async ({ mount }) => {
		let checked = false

		const onChange = (): void => {
			checked = !checked
		}

		const component = await mount(
			<DSRadio
				{...defaultRadioProps}
				onChange={onChange}
			/>,
		)
		const inputElement = component.getByTestId(
			`${defaultRadioProps.id}-radio-input`,
		)

		await component.click()
		await expect(inputElement).toBeChecked()
		expect(checked).toBe(true)
	})

	test("is disabled when state is disabled", async ({ mount }) => {
		const component = await mount(<DSRadio {...disabledRadioProps} />)

		const radioInputElement = await component.getByTestId(
			`${disabledRadioProps.id}-radio-input`,
		)

		const isRadioDisabled = await radioInputElement.isDisabled()

		expect(isRadioDisabled).toBe(true)
	})

	test("is checked when checked is initial value", async ({ mount }) => {
		const component = await mount(<DSRadio {...checkedRadioProps} />)

		const radioInputElement = await component.getByTestId(
			`${checkedRadioProps.id}-radio-input`,
		)

		const isRadioChecked = await radioInputElement.isChecked()

		expect(isRadioChecked).toBe(true)
	})
})
