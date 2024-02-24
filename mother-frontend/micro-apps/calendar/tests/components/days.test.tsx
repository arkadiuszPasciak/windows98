import { expect, test } from '@playwright/experimental-ct-react'
import { CalendarView } from '../../src/ui/views/calendar.view'

test.describe('Calendar: days', () => {
  test('generates correct amount of days', async ({ mount }) => {
    const component = await mount(<CalendarView />)
  
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    for (let day = 1; day < daysInMonth + 1; day++) {
      const dayElement = await component.getByTestId(`calendar-month-days-day-${day}`)
      await expect(dayElement).toBeVisible()
    }
  
    for (let noMoreDay = daysInMonth + 1; noMoreDay <= 31; noMoreDay++) {
      const noMoreDayElement = await component.getByTestId(`calendar-month-days-day-${noMoreDay}`)
      await expect(noMoreDayElement).toHaveCount(0)
    }
  })
})
