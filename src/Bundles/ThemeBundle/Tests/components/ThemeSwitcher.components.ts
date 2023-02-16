import ThemeSwitcher from '@Bundles/ThemeBundle/Components/ThemeSwitcher.vue'
import { EStorageNames } from '@Bundles/StorageBundle/Supports/Storage.supports'
import { EThemes } from '@Bundles/ThemeBundle/Supports/Theme.supports'

describe('[ThemeBundle]<Components>(ThemeSwitcher)', () => {
  beforeEach(() => {
    cy.viewport(80, 30)

    cy.mount(ThemeSwitcher)
  })

  it('should have element, class and change theme', () => {
    cy.get('div.UISelect.ThemeSwitcher')

    cy.get('[data-test="ui-select-themes"]').select('Dark')

    cy.get('[data-test="ui-select-themes"] > option:selected').should(
      'have.text',
      'Dark',
    )

    cy.get('html').should('have.class', 'theme-dark')

    cy.getAllLocalStorage().then((result: Cypress.StorageByOrigin) => {
      expect(result).to.deep.equal({
        'http://localhost:5173': {
          [EStorageNames.THEME]: EThemes.DARK,
        },
      })
    })

    cy.get('[data-test="ui-select-themes"]').select('Light')

    cy.get('[data-test="ui-select-themes"] > option:selected').should(
      'have.text',
      'Light',
    )

    cy.getAllLocalStorage().then((result: Cypress.StorageByOrigin) => {
      expect(result).to.deep.equal({
        'http://localhost:5173': {
          [EStorageNames.THEME]: EThemes.LIGHT,
        },
      })
    })

    cy.get('html').should('have.class', 'theme-light')
  })
})
