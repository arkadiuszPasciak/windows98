import UIModalNavigation from '@Bundles/UIBundle/Components/UIModalNavigation.vue'

describe('[UIBundle]<Snapshots>(UIModalNavigation)', async () => {
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
