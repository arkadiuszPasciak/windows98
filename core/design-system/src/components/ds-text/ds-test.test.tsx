import { expect, test } from '@playwright/experimental-ct-react'
import { DSText, DsTextProps } from './index'

const testProps: DsTextProps = {
  id: 'hello-world',
  text: 'Hello World',
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe('DSTest', () => {
  test('renders properly', async ({ mount }) => {
    const component = await mount(
      <DSText id={testProps.id} text={testProps.text} />,
    )

    await expect(component).toBeVisible()
    await expect(component).toHaveText(testProps.text)
    await expect(component).toHaveAttribute(
      'data-testid',
      `ds-text-${testProps.id}`,
    )
  })
})
