import { expect, test } from '@playwright/experimental-ct-react'
import { CalendarView } from '../../src/ui/views/calendar.view'

test.describe('Calendar: month-switcher', () => {
  test('select month', async ({ mount }) => {
    const component = await mount(<CalendarView />)
    const select = await component.getByTestId('ds-select-select-month-switcher')

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    for (let index = 0; index <= 11; index++) {
      await select.selectOption(months[index])
      await expect(select).toHaveValue(String(index))
    }
  })
})
