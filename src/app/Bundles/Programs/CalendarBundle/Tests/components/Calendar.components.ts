import { createTestingPinia } from '@pinia/testing'
import CalendarSettings from '@APP|Bundles/CalendarBundle/Components/CalendarSettings.vue'
import { CalendarComponentTesting } from '@APP|Bundles/CalendarBundle/Services/Calendar.services'
import { ECalendarYearChangeMethod } from '@APP|Bundles/CalendarBundle/Supports/Calendar.supports'

const methods = new CalendarComponentTesting()

describe('[CalendarBundle]<Components>(Calendar)', async () => {
  beforeEach(() => {
    cy.viewport(200, 240)

    const date = new Date(2023, 1, 1).getTime()

    cy.clock(date)

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
    methods.changeSelectAndCheckComponent('January', 0, 31)

    methods.changeSelectAndCheckComponent('February', 3, 28)

    methods.changeSelectAndCheckComponent('March', 3, 31)

    methods.changeSelectAndCheckComponent('April', 6, 30)

    methods.changeSelectAndCheckComponent('May', 1, 31)

    methods.changeSelectAndCheckComponent('June', 4, 30)

    methods.changeSelectAndCheckComponent('July', 6, 31)

    methods.changeSelectAndCheckComponent('August', 2, 31)

    methods.changeSelectAndCheckComponent('September', 5, 30)

    methods.changeSelectAndCheckComponent('October', 0, 31)

    methods.changeSelectAndCheckComponent('November', 3, 30)

    methods.changeSelectAndCheckComponent('December', 5, 31)
  })

  it('selects years', () => {
    methods.changeYearAndCheckComponent(
      '2024',
      ECalendarYearChangeMethod.INCREASE,
      4,
      29,
    )

    methods.changeYearAndCheckComponent(
      '2023',
      ECalendarYearChangeMethod.DECREASE,
      3,
      28,
    )

    methods.changeYearAndCheckComponent(
      '2022',
      ECalendarYearChangeMethod.DECREASE,
      2,
      28,
    )
  })
})
