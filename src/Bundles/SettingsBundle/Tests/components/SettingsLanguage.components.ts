import { createTestingPinia } from '@pinia/testing'
import SettingsLanguages from '@Bundles/SettingsBundle/Components/SettingsLanguages.vue'

describe('[SettingsBundle]<Components>(SettingsLanguages)', () => {
  beforeEach(() => {
    cy.viewport(420, 415)

    cy.mount(SettingsLanguages, {
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

  it('should have elements and classes', () => {
    cy.get('div.SettingsLanguages')

    cy.get('.UISelect.LanguageSwitcher')

    cy.get('.UISelect.ThemeSwitcher')
  })
})
