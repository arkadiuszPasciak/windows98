import { createTestingPinia } from '@pinia/testing'
import CalendarSettings from '@Bundles/CalendarBundle/Components/CalendarSettings.vue'
import {
  ECalendarYearChangeMethod,
  TCalendarYearChangeMethod,
} from '@Bundles/CalendarBundle/Supports/Calendar.supports'

const elements = {
  calendarDaysView: '[data-test="calendar-view-days"]',
  selectDateMonths: '[data-test="ui-select-date-months"]',
  optionSelected: '[data-test="ui-select-date-months"] > option:selected',
  buttonYear: (method: TCalendarYearChangeMethod) =>
    `[data-test="calendar-year-switcher-${method}"]`,
  showYear: '[data-test="calendar-year-switcher-year"]',
}

function changeSelectAndCheckComponent(
  month: string,
  inActiveDays: number,
  days: number,
) {
  cy.get(elements.selectDateMonths).select(month)

  cy.get(elements.optionSelected).should('have.text', month)

  cy.get(elements.calendarDaysView)
    .find('.day.is-inactive')
    .should('have.length', inActiveDays)

  cy.get(elements.calendarDaysView)
    .find('.day.is-normal')
    .should('have.length', days)
}

function changeYearAndCheckComponent(
  year: string,
  method: TCalendarYearChangeMethod,
  inActiveDays: number,
  days: number,
) {
  cy.get(elements.buttonYear(method)).click()

  cy.get(elements.showYear).should('have.text', year)

  cy.get(elements.calendarDaysView)
    .find('.day.is-inactive')
    .should('have.length', inActiveDays)

  cy.get(elements.calendarDaysView)
    .find('.day.is-normal')
    .should('have.length', days)
}

describe('[CalendarBundle]<Components>(Calendar)', async () => {
  beforeEach(() => {
    cy.viewport(200, 240)

    cy.mount(CalendarSettings, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            stubActions: false,
          }),
        ],
      },
    })
  })

  it('should have element and class', () => {
    cy.get('div.CalendarSettings')
  })

  it('should have title', () => {
    cy.get('[data-test="frame-title-calendar"]').should('have.text', 'Calendar')
  })

  it('selects months', () => {
    changeSelectAndCheckComponent('January', 0, 31)

    changeSelectAndCheckComponent('February', 3, 28)

    changeSelectAndCheckComponent('March', 3, 31)

    changeSelectAndCheckComponent('April', 6, 30)

    changeSelectAndCheckComponent('May', 1, 31)

    changeSelectAndCheckComponent('June', 4, 30)

    changeSelectAndCheckComponent('July', 6, 31)

    changeSelectAndCheckComponent('August', 2, 31)

    changeSelectAndCheckComponent('September', 5, 30)

    changeSelectAndCheckComponent('October', 0, 31)

    changeSelectAndCheckComponent('November', 3, 30)

    changeSelectAndCheckComponent('December', 5, 31)
  })

  it('selects years', () => {
    changeYearAndCheckComponent(
      '2024',
      ECalendarYearChangeMethod.INCREASE,
      4,
      29,
    )

    changeYearAndCheckComponent(
      '2023',
      ECalendarYearChangeMethod.DECREASE,
      3,
      28,
    )

    changeYearAndCheckComponent(
      '2022',
      ECalendarYearChangeMethod.DECREASE,
      2,
      28,
    )
  })
})
