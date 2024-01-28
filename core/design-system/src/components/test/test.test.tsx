import { expect, test } from '@playwright/experimental-ct-react'
import { Test } from './index'

test.use({ viewport: { width: 500, height: 500 } })

test.describe('Test', () => {
  test('renders properly', async ({ mount }) => {
    const component = await mount(<Test></Test>)

    await expect(component).toBeVisible()
  })
})
