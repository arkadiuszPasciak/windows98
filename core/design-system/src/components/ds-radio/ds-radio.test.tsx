import { expect, test } from "@playwright/experimental-ct-react"
import { DSRadio } from "./ds-radio"
import { DSRadioStories, dsRadioStoriesProps } from "./ds-radio.stories.tsx"
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
		const textElement = component.getByTestId(`ds-text-${defaultRadioProps.id}`)

		await expect(component).toBeVisible()
		await expect(inputElement).toBeVisible()
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
		await expect(checked).toBe(true)
	})

	test("is disabled when state is disabled", async ({ mount }) => {
		const component = await mount(<DSRadio {...disabledRadioProps} />)

		const radioInputElement = await component.getByTestId(
			`${disabledRadioProps.id}-radio-input`,
		)

		const isRadioDisabled = await radioInputElement.isDisabled()

		await expect(isRadioDisabled).toBe(true)
	})

	test("is checked when checked is initial value", async ({ mount }) => {
		const component = await mount(<DSRadio {...checkedRadioProps} />)

		const radioInputElement = await component.getByTestId(
			`${checkedRadioProps.id}-radio-input`,
		)

		const isRadioChecked = await radioInputElement.isChecked()

		await expect(isRadioChecked).toBe(true)
	})

	test("only one radio button is checked when clicked", async ({ mount }) => {
		const component = await mount(<DSRadioStories />)

		const labelElement1 = component.getByTestId(
			`${dsRadioStoriesProps.radio1.id}-radio`,
		)
		const labelElement2 = component.getByTestId(
			`${dsRadioStoriesProps.radio2.id}-radio`,
		)
		const labelElement3 = component.getByTestId(
			`${dsRadioStoriesProps.radio3.id}-radio`,
		)

		const inputElement1 = component.getByTestId(
			`${dsRadioStoriesProps.radio1.id}-radio`,
		)
		const inputElement2 = component.getByTestId(
			`${dsRadioStoriesProps.radio2.id}-radio`,
		)
		const inputElement3 = component.getByTestId(
			`${dsRadioStoriesProps.radio3.id}-radio`,
		)

		await labelElement2.click()
		await expect(inputElement1).not.toBeChecked()
		await expect(inputElement2).toBeChecked()
		await expect(inputElement3).not.toBeChecked()

		await labelElement3.click()
		await expect(inputElement1).not.toBeChecked()
		await expect(inputElement2).not.toBeChecked()
		await expect(inputElement3).toBeChecked()

		await labelElement1.click()
		await expect(inputElement1).toBeChecked()
		await expect(inputElement2).not.toBeChecked()
		await expect(inputElement3).not.toBeChecked()
	})
})
