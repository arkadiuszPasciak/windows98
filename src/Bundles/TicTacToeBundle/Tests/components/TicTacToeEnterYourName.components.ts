import TicTacToeEnterYourName from '@Bundles/TicTacToeBundle/Components/TicTacToeEnterYourName.vue'

describe('[TicTacToeBundle]<Components>(TicTacToeEnterYourName)', () => {
  it('renders correctly component', () => {
    cy.viewport(284, 50)

    cy.mount(TicTacToeEnterYourName)

    cy.get('[data-test="ui-input-tic-tac-toe-enter-your-name"]')
      .clear()
      .type('Arkadiusz')
      .should('have.value', 'Arkadiusz')

    cy.get('[data-test="ui-input-label-tic-tac-toe-enter-your-name"]').contains(
      'Enter your name',
    )
  })
})
