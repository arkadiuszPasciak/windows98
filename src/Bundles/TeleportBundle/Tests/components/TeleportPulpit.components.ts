import { createTestingPinia } from '@pinia/testing'
import TeleportPulpit from '@Bundles/TeleportBundle/Components/TeleportPulpit.vue'

describe('[TeleportBundle]<Components>(TeleportPulpit)', async () => {
  it('renders correctly component and turn on/off modal calculator', () => {
    cy.viewport(190, 220)

    cy.mount(TeleportPulpit, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalCalculator: true },
            },
            stubActions: false,
          }),
        ],
      },
    })

    cy.get('div.TeleportGrid.TeleportPulpit')
    cy.get('div.UIModal.Calculator')

    cy.get('[data-test="ui-modal-button-close"]').click()

    cy.get('div.UIModal.Calculator').should('not.exist')
  })

  it('renders correctly component and turn on/off modal notepad', () => {
    cy.viewport(600, 450)

    cy.mount(TeleportPulpit, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalNotepad: true },
            },
            stubActions: false,
          }),
        ],
      },
    })

    cy.get('div.TeleportGrid.TeleportPulpit')
    cy.get('div.UIModal.Notepad')

    cy.get('[data-test="ui-modal-button-close"]').click()

    cy.get('div.UIModal.Notepad').should('not.exist')
  })

  it('renders correctly component and turn on/off modal run', () => {
    cy.viewport(330, 165)

    cy.mount(TeleportPulpit, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalRun: true },
            },
            stubActions: false,
          }),
        ],
      },
    })

    cy.get('div.TeleportGrid.TeleportPulpit')
    cy.get('div.UIModal.Run')

    cy.get('[data-test="ui-modal-button-close"]').click()

    cy.get('div.UIModal.Run').should('not.exist')
  })

  it('renders correctly component and turn on/off modal settings', () => {
    cy.viewport(420, 415)

    cy.mount(TeleportPulpit, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalSettings: true },
            },
            stubActions: false,
          }),
        ],
      },
    })

    cy.get('div.TeleportGrid.TeleportPulpit')
    cy.get('div.UIModal.Settings')

    cy.get('[data-test="ui-modal-button-close"]').click()

    cy.get('div.UIModal.Settings').should('not.exist')
  })

  it('renders correctly component and turn on/off modal shut down', () => {
    cy.viewport(330, 180)

    cy.mount(TeleportPulpit, {
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

    cy.get('div.TeleportGrid.TeleportPulpit')
    cy.get('div.UIModal.ShutDown')

    cy.get('[data-test="ui-modal-button-close"]').click()

    cy.get('div.UIModal.ShutDown').should('not.exist')
  })

  it('renders correctly component and turn on/off modal tic tac toe', () => {
    cy.viewport(330, 180)

    cy.mount(TeleportPulpit, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalTicTacToe: true },
            },
            stubActions: false,
          }),
        ],
      },
    })

    cy.get('div.TeleportGrid.TeleportPulpit')
    cy.get('div.UIModal.TicTacToe')

    cy.get('[data-test="ui-modal-button-close"]').click()

    cy.get('div.UIModal.TicTacToe').should('not.exist')
  })
})
