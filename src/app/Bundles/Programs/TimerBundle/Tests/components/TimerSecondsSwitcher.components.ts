import { createTestingPinia } from '@pinia/testing'
import TimerSecondsSwitcher from '@APP|Bundles/TimerBundle/Components/TimerSecondsSwitcher.vue'
import TimerSwitcherTesting from '@APP|Bundles/TimerBundle/Services/TimerSwitcherTesting.services'
import { ETimerSwitcherType } from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'

const TimerSwitcherTestingService = new TimerSwitcherTesting(
  ETimerSwitcherType.SECONDS,
)

describe('[TimerBundle]<Components>(TimerSecondsSwitcher)', () => {
  it('renders correctly component and check below zero value', () => {
    cy.viewport(205, 55)

    cy.mount(TimerSecondsSwitcher, {
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
                  seconds: 0,
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

    cy.mount(TimerSecondsSwitcher, {
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
                  seconds: 59,
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
