import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
import { MLanguageOptions } from '@Bundles/LanguageBundle/Mocks/Language.mocks'
import { MThemeOptions } from '@Bundles/ThemeBundle/Mocks/Theme.mocks'

describe('[UIBundle]<Components>(UISelect)', async () => {
  it('renders correctly component with label position top', () => {
    cy.viewport(100, 45)

    cy.mount(UISelect, {
      props: {
        id: 'languages',
        options: MLanguageOptions,
        modelValue: MLanguageOptions[0].value,
        labelName: 'Languages',
        labelPosition: 'top',
      },
    })

    cy.get('.UISelect')

    cy.get('[data-test="ui-select-label-languages"]')
      .contains('Languages')
      .should('have.attr', 'for', 'languages')

    cy.get('[data-test="ui-select-languages"] > option:selected').should(
      'have.text',
      'English',
    )

    cy.get('[data-test="ui-select-languages"]').select('Polish')

    cy.get('[data-test="ui-select-languages"] > option:selected').should(
      'have.text',
      'Polish',
    )

    cy.get('[data-test="ui-select-languages"]')
      .should('have.attr', 'id', 'languages')
      .should('have.attr', 'name', 'languages')
      .should('have.attr', 'class', 'select')
      .select('English')

    cy.get('[data-test="ui-select-languages"] > option:selected').should(
      'have.text',
      'English',
    )
  })

  it('renders correctly component with label position left', () => {
    cy.viewport(100, 35)

    cy.mount(UISelect, {
      props: {
        id: 'themes',
        options: MThemeOptions,
        modelValue: MThemeOptions[0].value,
        labelName: 'Themes',
        labelPosition: 'left',
      },
    })

    cy.get('.UISelect')

    cy.get('[data-test="ui-select-label-themes"]')
      .contains('Themes')
      .should('have.attr', 'for', 'themes')

    cy.get('[data-test="ui-select-themes"] > option:selected').should(
      'have.text',
      'Light',
    )

    cy.get('[data-test="ui-select-themes"]').select('Dark')

    cy.get('[data-test="ui-select-themes"] > option:selected').should(
      'have.text',
      'Dark',
    )

    cy.get('[data-test="ui-select-themes"]')
      .should('have.attr', 'id', 'themes')
      .should('have.attr', 'name', 'themes')
      .should('have.attr', 'class', 'select')
      .select('Light')

    cy.get('[data-test="ui-select-themes"] > option:selected').should(
      'have.text',
      'Light',
    )
  })
})
