import { expect, test } from '@playwright/experimental-ct-react'
import { DSSelect, DSSelectProps } from './index'
import { DSSelectOptions } from './ds-select.mock'

const defaultSelect: DSSelectProps = {
  disabled: false,
  id: 'language',
  labelName: 'Language',
  labelPosition: 'top',
  modelValue: 'test',
  options: DSSelectOptions,
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

    await expect(component).toBeVisible()
    // await expect(component).toHaveText(testProps.text)
    // await expect(component).toHaveAttribute(
    //   'data-testid',
    //   `ds-text-${testProps.id}`,
    // )
  })
})
