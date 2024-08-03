import { expect, test } from '@playwright/experimental-ct-react'
import { DSRadio } from './ds-radio'
import type { DSRadioProps } from "./ds-radio.type"

const defaultRadioProps: DSRadioProps = {
	id: 'rodo',
	name: 'rodo-1',
	initialChecked: false,
	text: { content: 'Agree your rodo', visible: true },
	onChange: () => { },
}

const disabledRadioProps: DSRadioProps = {
	...defaultRadioProps,
	disabled: true,
}

const checkedRadioProps: DSRadioProps = {
	...defaultRadioProps,
	initialChecked: true,
}

const radioProps1: DSRadioProps = {
	...defaultRadioProps,
	id: 'radio-1',
	name: 'group-1',
	text: { content: 'Radio 1', visible: true },
}

const radioProps2: DSRadioProps = {
	...defaultRadioProps,
	id: 'radio-2',
	name: 'group-1',
	text: { content: 'Radio 2', visible: true },
}

const radioProps3: DSRadioProps = {
	...defaultRadioProps,
	id: 'radio-3',
	name: 'group-1',
	text: { content: 'Radio 3', visible: true },
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe('DSRadio', () => {
	test('renders properly', async ({ mount }) => {
		const component = await mount(<DSRadio {...defaultRadioProps} />)

		const inputElement = await component.getByTestId(`${defaultRadioProps.id}-radio-input`)
		const iconElement = await component.getByTestId(`${defaultRadioProps.id}-radio-icon`)
		const textElement = await component.getByTestId(`ds-text-${defaultRadioProps.id}`)

		await expect(component).toBeVisible()
		await expect(inputElement).toBeVisible()
		await expect(iconElement).toBeVisible()

		if (defaultRadioProps.text.visible) {
			await expect(textElement).toBeVisible()
		}
	})

	test('handles radio change', async ({ mount }) => {
		const component = await mount(<DSRadio {...defaultRadioProps} />)

		const radioElement = await component.getByTestId(`${defaultRadioProps.id}-radio`);
		await radioElement.click()

		await expect(radioElement).toBeChecked()
	})

	test('is disabled when state is disabled', async ({ mount }) => {
		const component = await mount(<DSRadio {...disabledRadioProps} />)

		const radioInputElement = await component.getByTestId(`${disabledRadioProps.id}-radio-input`)

		const isRadioDisabled = await radioInputElement.isDisabled()

		await expect(isRadioDisabled).toBe(true)
	})

	test('is checked when checked is initial value', async ({ mount }) => {
		const component = await mount(<DSRadio {...checkedRadioProps} />)

		const radioInputElement = await component.getByTestId(`${checkedRadioProps.id}-radio-input`)

		const isRadioChecked = await radioInputElement.isChecked()

		await expect(isRadioChecked).toBe(true)
	})

	test('only one radio button is checked when clicked', async ({ mount }) => {
		const ParentComponent = (): JSX.Element => (
			<>
				<DSRadio {...radioProps1} />
				<DSRadio {...radioProps2} />
				<DSRadio {...radioProps3} />
			</>
		)

		const component = await mount(<ParentComponent />)

		const radioInputElement1 = await component.getByTestId(`${radioProps1.id}-radio-input`)
		const radioInputElement2 = await component.getByTestId(`${radioProps2.id}-radio-input`)
		const radioInputElement3 = await component.getByTestId(`${radioProps3.id}-radio-input`)

		await radioInputElement2.click()
		await expect(radioInputElement1).not.toBeChecked()
		await expect(radioInputElement2).toBeChecked()
		await expect(radioInputElement3).not.toBeChecked()

		await radioInputElement3.click()
		await expect(radioInputElement1).not.toBeChecked()
		await expect(radioInputElement2).not.toBeChecked()
		await expect(radioInputElement3).toBeChecked()

		await radioInputElement1.click()
		await expect(radioInputElement1).toBeChecked()
		await expect(radioInputElement2).not.toBeChecked()
		await expect(radioInputElement3).not.toBeChecked()
	})
})
