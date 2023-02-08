import Navigation from '@Bundles/NavigationBundle/Components/Navigation.vue'

describe('[NavigationBundle]<Components>(Navigation)', () => {
  before(() => {
    cy.viewport(500, 28)

    cy.mount(Navigation)
  })

  it('should have element and class', () => {
    cy.get('nav.Navigation')
  })
})
