import { createTestingPinia } from '@pinia/testing'
import ShutDown from '@Bundles/ShutDownBundle/Components/ShutDown.vue'

describe('[ShutDownBundle]<Components>(ShutDown)', () => {
  beforeEach(() => {
    cy.viewport(330, 180)

    cy.mount(ShutDown, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalShutDown: true },
            },
            stubActions: false,
          }),
        ],
      },
    })
  })

  it('should have title', () => {
    cy.get('[data-test="modal-header-title"]').should(
      'have.text',
      'Shut Down Windows',
    )
  })

  it('should have elements and classes', () => {
    cy.get('div.ShutDown')

    cy.get('[data-test="shut-down-icon"]')

    cy.get('[data-test="shut-down-description"]').contains(
      'What do you want the computer to do?',
    )

    cy.get('[data-test="ui-radio-label-shut-down-shut-down"]').contains(
      'Shut Down',
    )

    cy.get('[data-test="ui-radio-label-shut-down-restart"]').contains('Restart')
  })

  it('should check restart and restart page', () => {
    cy.get('[data-test="ui-radio-icon-shut-down-restart"]').click()

    cy.get('[data-test="ui-radio-input-shut-down-restart"]').should(
      'be.checked',
    )

    //  TODO - I need to fix it, reload without end loop
    // cy.get('[data-test="shut-down-button-ok"]').click()
  })

  it('should shut down and move user to google.com', () => {
    cy.get('[data-test="ui-radio-icon-shut-down-shut-down"]').click()

    cy.get('[data-test="ui-radio-input-shut-down-shut-down"]').should(
      'be.checked',
    )

    //  TODO - I need to fix it, reload without end loop
    // cy.get('[data-test="shut-down-button-ok"]').click()
  })
})
