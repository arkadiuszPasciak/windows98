import { createTestingPinia } from '@pinia/testing'
import Timer from '@APP|Bundles/TimerBundle/Components/Timer.vue'
import TimerTesting from '@APP|Bundles/TimerBundle/Services/TimerTesting.services'

const TimerTestingService = new TimerTesting()

describe('[TimerBundle]<Components>(Timer)', () => {
  it('renders correctly component', () => {
    cy.viewport(330, 225)

    cy.mount(Timer, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalTimer: true },
            },
            stubActions: false,
          }),
        ],
      },
    })

    TimerTestingService.checkComponent()

    TimerTestingService.switchPresetsAndCheckTime()
  })
})
