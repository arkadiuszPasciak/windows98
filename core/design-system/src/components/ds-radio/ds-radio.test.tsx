import { expect, test } from '@playwright/experimental-ct-react'
import { DSRadio } from './ds-radio'
import type { DSRadioProps } from "./ds-radio.type"
import { State } from '@windows98/toolkit'

const defaultRadioProps: DSRadioProps = {
	id: 'rodo',
	name: 'rodo-1',
	state: State.ACTIVE,
	initialValue: false,
	text: { content: 'Agree your rodo', visible: true },
	onChange: () => { },
}

const disabledRadioProps: DSRadioProps = {
	...defaultRadioProps,
	state: State.DISABLED,
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

		const radioInputElement = await component.getByTestId(`${defaultRadioProps.id}-radio-input`)

		await radioInputElement.click()

		await expect(radioInputElement).toBeChecked()
	})

	test('is disabled when state is disabled', async ({ mount }) => {
		const component = await mount(<DSRadio {...disabledRadioProps} />)

		const radioInputElement = await component.getByTestId(`${disabledRadioProps.id}-radio-input`)

		const isRadioDisabled = await radioInputElement.isDisabled()

		await expect(isRadioDisabled).toBe(true)
	})
})
