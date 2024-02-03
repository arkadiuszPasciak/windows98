import { expect, test } from '@playwright/experimental-ct-react'
import { DSSelectButton} from './ds-select-button'

test.use({ viewport: { width: 500, height: 500 } })

test.describe('DSSelectButton', () => {
  test('renders properly', async ({ mount }) => {
    const component = await mount(
      <DSSelectButton />,
    )

    await expect(component).toBeVisible()
  })
})
