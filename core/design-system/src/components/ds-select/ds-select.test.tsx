import { expect, test } from '@playwright/experimental-ct-react'
import { DSSelect, DSSelectProps } from './index'

const defaultSelect: DSSelectProps = {
  disabled: false,
  id: 'language',
  labelName: 'Language',
  labelPosition: 'top',
  modelValue: 'en',
  options: [
    {
      value: 'de',
      name: 'Deutsch',
    },
    {
      value: 'en',
      name: 'English',
    },
    {
      value: 'pl',
      name: 'Polski',
    },
  ],
  required: true,
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe('DSSelect', () => {
  test('renders properly', async ({ mount }) => {
    const component = await mount(
      <DSSelect
        disabled={defaultSelect.disabled}
        id={defaultSelect.id}
        labelName={defaultSelect.labelName}
        labelPosition={defaultSelect.labelPosition}
        modelValue={defaultSelect.modelValue}
        options={defaultSelect.options}
        required={defaultSelect.required}
      />,
    )

    const label = await component.getByText(defaultSelect.labelName!)
    const select = await component.getByTestId(`ds-select-select-${defaultSelect.id}`)
    
    await expect(component).toBeVisible()
    await expect(label).toBeVisible()
		await expect(select).toBeVisible()
  })

  test("selects an option", async ({ mount }) => {
		const component = await mount(
      <DSSelect
        disabled={defaultSelect.disabled}
        id={defaultSelect.id}
        labelName={defaultSelect.labelName}
        labelPosition={defaultSelect.labelPosition}
        modelValue={defaultSelect.modelValue}
        options={defaultSelect.options}
        required={defaultSelect.required}
      />,
    )

		const select = await component.getByTestId(`ds-select-select-${defaultSelect.id}`)

    await select.selectOption('de')
		await expect(select).toHaveValue('de')

    await select.selectOption('en')
		await expect(select).toHaveValue('en')

    await select.selectOption('pl')
		await expect(select).toHaveValue('pl')
	})
})
