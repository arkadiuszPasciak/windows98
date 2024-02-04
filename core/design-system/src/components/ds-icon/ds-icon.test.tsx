import { expect, test } from '@playwright/experimental-ct-react'
import { DSIcon, type DSIconProps } from './index'

const defaultIcon: DSIconProps = {
	name: 'selectButton',
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe('DSIcon', () => {
  test('renders properly', async ({ mount }) => {
    const component = await mount(
      <DSIcon name={defaultIcon.name} />,
    )

    await expect(component).toBeVisible()
  })
})
