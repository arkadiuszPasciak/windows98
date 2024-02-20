import { expect, test } from '@playwright/experimental-ct-react'
import { CalendarView } from '../../src/ui/views/calendar.view'

test.use({ viewport: { width: 500, height: 500 } })

test.describe('Calendar', () => {
  test('renders properly', async ({ mount }) => {
    const component = await mount(
      <CalendarView />,
    )

    await expect(component).toBeVisible()
  })
})
