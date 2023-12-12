import { createTestingPinia } from '@pinia/testing'
import TimerHoursSwitcher from '@APP|Bundles/TimerBundle/Components/TimerHoursSwitcher.vue'
import TimerSwitcherTesting from '@APP|Bundles/TimerBundle/Services/TimerSwitcherTesting.services'
import { ETimerSwitcherType } from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'

const TimerSwitcherTestingService = new TimerSwitcherTesting(
  ETimerSwitcherType.HOURS,
)

describe('[TimerBundle]<Components>(TimerHoursSwitcher)', () => {
  it('renders correctly component and check below zero value', () => {
    cy.viewport(205, 55)

    cy.mount(TimerHoursSwitcher, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              timer: {
                disabled: {
                  switcher: false,
                },
                switcher: {
                  hours: 0,
                },
              },
            },
            stubActions: false,
          }),
        ],
      },
    })

    TimerSwitcherTestingService.checkBelowZeroValue()
  })

  it('renders correctly component and check above fifty-nine value', () => {
    cy.viewport(205, 55)

    cy.mount(TimerHoursSwitcher, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              timer: {
                disabled: {
                  switcher: false,
                },
                switcher: {
                  hours: 59,
                },
              },
            },
            stubActions: false,
          }),
        ],
      },
    })

    TimerSwitcherTestingService.checkAboveFiftyNineValue()
  })
})
