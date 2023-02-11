import LanguageSwitcher from '@Bundles/LanguageBundle/Components/LanguageSwitcher.vue'

describe('[FileBundle]<Components>(FileOpen)', () => {
  beforeEach(() => {
    cy.viewport(80, 30)

    cy.mount(LanguageSwitcher)
  })

  it('should have element, class and change language', () => {
    cy.get('div.UISelect.LanguageSwitcher')

    cy.get('[data-test="ui-select-languages"]').select('Polish')

    cy.get('[data-test="ui-select-languages"] > option:selected').should(
      'have.text',
      'Polski',
    )

    cy.get('[data-test="ui-select-languages"]').select('Angielski')

    cy.get('[data-test="ui-select-languages"] > option:selected').should(
      'have.text',
      'English',
    )
  })
})
