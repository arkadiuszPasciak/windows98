import UIModalNavigationItem from '@Bundles/UIBundle/Components/UIModalNavigationItem.vue'

describe('[UIBundle]<Components>(UIModalNavigationItem)', async () => {
  it('renders correctly component', () => {
    cy.mount(UIModalNavigationItem, {
      slots: {
        default: 'Menu',
      },
    })

    const button = cy.get('button.UIModalNavigationItem')

    button.contains('Menu')
    button.should('have.attr', 'type', 'button')
  })
})
