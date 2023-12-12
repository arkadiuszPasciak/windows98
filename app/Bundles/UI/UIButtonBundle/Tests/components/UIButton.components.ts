import UIButton from '@APP|Bundles/UIButtonBundle/Components/UIButton.vue'

describe('[UIButtonBundle]<Components>(UIButton)', async () => {
  it('renders correctly component: size medium and variant primary', () => {
    cy.viewport(75, 23)

    cy.mount(UIButton, {
      props: {
        size: 'medium',
      },
      slots: {
        default: 'Click Me!',
      },
    })

    const button = cy.get('.UIButton.size-medium')

    button.contains('Click Me!')

    button.should('have.attr', 'type', 'button')
  })
})
