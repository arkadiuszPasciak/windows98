import { createTestingPinia } from '@pinia/testing'
import Settings from '@APP|Bundles/SettingsBundle/Components/Settings.vue'

describe('[SettingsBundle]<Components>(Settings)', () => {
  beforeEach(() => {
    cy.viewport(420, 415)

    cy.mount(Settings, {
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
  })

  it('should have title', () => {
    cy.get('[data-test="modal-header-title"]').should('have.text', 'Settings')
  })

  it('should have element and class', () => {
    cy.get('div.Settings')
  })

  it('should open date and time tab', () => {
    cy.get('[data-test="ui-tabs-button-1"]').contains('Date & Time').click()

    cy.get('div.SettingsDateTime')
  })

  it('should open date and languages tab', () => {
    cy.get('[data-test="ui-tabs-button-2"]').contains('Languages').click()

    cy.get('div.SettingsLanguages')
  })

  it('should open date and general tab', () => {
    cy.get('[data-test="ui-tabs-button-0"]').contains('General').click()

    cy.get('div.SettingsGeneral')
  })
})
