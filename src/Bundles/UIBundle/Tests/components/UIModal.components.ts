import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'

describe('[UIBundle]<Components>(UIModal)', async () => {
  it('renders correctly component', () => {
    cy.viewport(500, 300)

    cy.mount(UIModal, {
      props: {
        title: 'Name of application',
        width: 500,
        height: 300,
        modalState: true,
      },
      slots: {
        default: '<div class="content">it is content</div>',
        options: '<button class="menu">menu</button>',
      },
    })

    cy.get('.UIModal')

    cy.get('.UIModal > .container')
      .should('have.css', 'width', '500px')
      .should('have.css', 'height', '300px')

    cy.get('.UIModal > .container > .header')

    cy.get('div.UIModal > div.container > div.header > h3.title')

    cy.get('[data-test="modal-header-title"]').contains('Name of application')

    cy.get('[data-test="ui-modal-button-close"]')
      .should('have.attr', 'type', 'button')
      .click()

    cy.get('[data-test="ui-modal-button-close"] > img')
      .should('have.class', 'button-close-icon')
      .should('have.attr', 'width', 8)
      .should('have.attr', 'height', 7)
      .should('have.attr', 'alt', 'Close window')
      .should('have.attr', 'src', '/icons/close-modal.svg')
      .click()

    cy.get('.UIModalNavigation > .menu').contains('menu')

    cy.get('.content').contains('it is content')
  })
})
