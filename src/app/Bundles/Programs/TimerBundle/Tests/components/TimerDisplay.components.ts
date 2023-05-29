import { createTestingPinia } from '@pinia/testing'
import TimerDisplay from '@APP|Bundles/TimerBundle/Components/TimerDisplay.vue'
import TimerDisplayTesting from '@APP|Bundles/TimerBundle/Services/TimerDisplayTesting.services'

const TimerDisplayTestingService = new TimerDisplayTesting()

describe('[TimerBundle]<Components>(TimerDisplay)', () => {
  it('renders correctly component and show time', () => {
    cy.viewport(205, 55)

    cy.mount(TimerDisplay, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            stubActions: false,
          }),
        ],
      },
    })

    TimerDisplayTestingService.checkComponent()
  })
})
