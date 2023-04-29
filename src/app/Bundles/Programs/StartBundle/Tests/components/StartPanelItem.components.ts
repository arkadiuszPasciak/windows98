import { createTestingPinia } from '@pinia/testing'
import StartPanelItem from '@Bundles/StartBundle/Components/StartPanelItem.vue'

describe('[StartBundle]<Components>(StartPanelItem)', () => {
  it('should have element and class', () => {
    cy.viewport(415, 280)

    cy.mount(StartPanelItem, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            stubActions: false,
          }),
        ],
      },
      props: {
        name: 'StartBundle.shut-down',
        iconName: 'shut-down',
        size: 'small',
      },
    })

    cy.get('div.StartPanelItem.s-small')

    cy.get('p.UIText.name').contains('Shut Down...')

    const icon = cy.get('.icon')

    icon.should('have.attr', 'width', '18')

    icon.should('have.attr', 'height', '18')

    icon.should('have.attr', 'src', '/icons/applications/shut-down.png')
  })

  it('should have element and class', () => {
    cy.viewport(415, 280)

    cy.mount(StartPanelItem, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            stubActions: false,
          }),
        ],
      },
      props: {
        name: 'StartBundle.documentation',
        iconName: 'documentation',
        size: 'medium',
      },
    })

    cy.get('div.StartPanelItem.s-medium')

    cy.get('p.UIText.name').contains('Documentation')

    const icon = cy.get('.icon')

    icon.should('have.attr', 'width', '25')

    icon.should('have.attr', 'height', '25')

    icon.should('have.attr', 'src', '/icons/applications/documentation.png')
  })
})
