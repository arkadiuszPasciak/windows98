import UIText from '@Bundles/UITextBundle/Components/UIText.vue'

describe('[UIBundle]<Components>(UIText)', async () => {
  it('renders correctly component', () => {
    cy.viewport(300, 77)

    cy.mount(UIText, {
      slots: {
        default: 'What do you want the computer to do?',
      },
    })

    cy.get('p.UIText').contains('What do you want the computer to do?')
  })
})
