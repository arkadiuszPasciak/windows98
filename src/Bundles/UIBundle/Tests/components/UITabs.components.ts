import { Component, h } from 'vue'
import UITabs from '@Bundles/UIBundle/Components/UITabs.vue'
import UIText from '@Bundles/UIBundle/Components/UIText.vue'
import { TUITabsProps } from '@Bundles/UIBundle/Supports/UITabs.supports'

const firstComponent = (): Component => {
  return h(
    UIText,
    {
      class: 'first-component-content',
      'data-test': 'first-component-content',
    },
    'Content of the first component',
  )
}

const secondComponent = (): Component => {
  return h(
    UIText,
    {
      class: 'second-component-content',
      'data-test': 'second-component-content',
    },
    'Content of the second component',
  )
}

const tabs = [
  {
    title: 'Settings.general',
    component: firstComponent,
  },
  {
    title: 'Settings.languages',
    component: secondComponent,
  },
] as TUITabsProps

describe('[UIBundle]<Components>(UITabs)', async () => {
  it('renders correctly component', () => {
    cy.viewport(400, 100)

    cy.mount(UITabs, {
      props: {
        tabs: tabs,
      },
    })

    cy.get('.UITabs > .tabs')

    cy.get('.UITabs > .content')

    cy.get('[data-test="first-component-content"]')
      .contains('Content of the first component')
      .should('have.class', 'UIText first-component-content content-tab active')

    cy.get('[data-test="ui-tabs-button-1"]').contains('Languages').click()

    cy.get('[data-test="second-component-content"]')
      .contains('Content of the second component')
      .should(
        'have.class',
        'UIText second-component-content content-tab active',
      )

    cy.get('[data-test="ui-tabs-button-0"]').contains('General').click()

    cy.get('[data-test="first-component-content"]')
      .contains('Content of the first component')
      .should('have.class', 'UIText first-component-content content-tab active')
  })
})
