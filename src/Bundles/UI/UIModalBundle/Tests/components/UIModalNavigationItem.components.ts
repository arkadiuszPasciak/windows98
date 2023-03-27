import UIModalNavigationItem from '@Bundles/UIModalBundle/Components/UIModalNavigationItem.vue'

describe('[UIModalBundle]<Components>(UIModalNavigationItem)', async () => {
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
