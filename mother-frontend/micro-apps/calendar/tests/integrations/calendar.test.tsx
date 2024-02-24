import { expect, test } from '@playwright/experimental-ct-react'
import { CalendarView } from '../../src/ui/views/calendar.view'

test.describe('calendar', () => {
  test('days are correct after changing year and month', async ({ mount }) => {
    const component = await mount(<CalendarView />)
  
    const selectMonth = await component.getByTestId('ds-select-select-month-switcher')
    const inputYear = await component.getByTestId('ds-input-input-stepper-calendar-year')
    const increaseYear = await component.getByTestId('ds-button-arrow-calendar-year-top')
  
    await selectMonth.selectOption('February')
    await increaseYear.click()
  
    const yearValue = await inputYear.inputValue();
    const year = parseInt(yearValue, 10);

    const month = 1
    const daysInMonth = new Date(year, month + 1, 0).getDate()
  
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
