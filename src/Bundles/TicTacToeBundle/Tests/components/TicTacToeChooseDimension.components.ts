import TicTacToeChooseDimension from '@Bundles/TicTacToeBundle/Components/TicTacToeChooseDimension.vue'

describe('[TicTacToeBundle]<Components>(TicTacToeChooseDimension)', () => {
  it('renders correctly component', () => {
    cy.viewport(284, 50)

    cy.mount(TicTacToeChooseDimension)

    cy.get('.TicTacToeChooseDimension')

    cy.get('.UIText.title').contains('Choose a dimension of the field')

    cy.get('[data-test="ui-radio-input-tic-tac-toc-choose-dimension-3x3"]')
      .click()
      .should('be.checked')

    cy.get(
      '[data-test="ui-radio-label-tic-tac-toc-choose-dimension-3x3"]',
    ).contains(' 3 x 3 ')
  })
})
