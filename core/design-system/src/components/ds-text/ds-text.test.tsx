import { expect, test } from '@playwright/experimental-ct-react'
import { DSText, type DSTextProps } from './index'

const defaultText: DSTextProps = {
  id: 'hello-world',
  text: 'Hello World',
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe('DSTest', () => {
  test('renders properly', async ({ mount }) => {
    const component = await mount(
      <DSText id={defaultText.id} text={defaultText.text} />,
    )

    await expect(component).toBeVisible()
    await expect(component).toHaveText(defaultText.text)
    await expect(component).toHaveAttribute(
      'data-testid',
      `ds-text-${defaultText.id}`,
    )
  })
})
