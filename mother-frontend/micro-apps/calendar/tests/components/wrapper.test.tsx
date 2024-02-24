import { expect, test } from '@playwright/experimental-ct-react'
import { CalendarView } from '../../src/ui/views/calendar.view'

test.describe('Calendar: year-switcher', () => {
  test('renders properly', async ({ mount }) => {
    const component = await mount(<CalendarView />)
    await expect(component).toBeVisible()
  });

  test('frame has correct text', async ({ mount }) => {
    const component = await mount(<CalendarView />)
    const frame = await component.getByTestId('ds-text-frame-calculator')
    
    await expect(frame).toHaveText('Calendar')
  })
})
