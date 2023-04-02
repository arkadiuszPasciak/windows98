import UIModalNavigation from '@Bundles/UIModalBundle/Components/UIModalNavigation.vue'

describe('[UIModalBundle]<Snapshots>(UIModalNavigation)', async () => {
  it('renders correctly component', () => {
    cy.mount(UIModalNavigation, {
      slots: {
        default: '<p class="slot">This is a default slot!</p>',
      },
    })

    cy.get('.UIModalNavigation')

    cy.get('p.slot').contains('This is a default slot!')
  })
})
