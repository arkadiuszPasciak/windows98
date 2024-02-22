import { expect, test } from '@playwright/experimental-ct-react'
import { CalendarView } from '../../src/ui/views/calendar.view'

test.use({ viewport: { width: 500, height: 500 } })

test.describe('calendar', () => {
  test('renders properly', async ({ mount }) => {
    const component = await mount(<CalendarView />)
    await expect(component).toBeVisible()
  });

  test('frame has correct text', async ({ mount }) => {
    const component = await mount(<CalendarView />)
    const frame = await component.getByTestId('ds-text-frame-calculator')
    
    await expect(frame).toHaveText('Calendar')
  })

  test('select month', async ({ mount }) => {
    const component = await mount(<CalendarView />)
    const select = await component.getByTestId('ds-select-select-month-switcher')

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    for (let index = 0; index <= 11; index++) {
      await select.selectOption(months[index])
      await expect(select).toHaveValue(String(index))
    }
  })

  test('selects years', async ({ mount }) => {
    const component = await mount(<CalendarView />)
    const input = await component.getByTestId('ds-input-input-stepper-calendar-year')
    const increaseYear = await component.getByTestId('ds-button-arrow-calendar-year-top')
    const decreaseYear = await component.getByTestId('ds-button-arrow-calendar-year-bottom')

    await expect(input).toHaveValue('2024')

    await increaseYear.click()

    await expect(input).toHaveValue('2025')

    await decreaseYear.click()

    await expect(input).toHaveValue('2024')
  })
})
