import TicTacToeChoosePlayer from '@Bundles/TicTacToeBundle/Components/TicTacToeChoosePlayer.vue'
import { ETicTacToePlayerSign } from '@Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

describe('[TicTacToeBundle]<Components>(TicTacToeChoosePlayer)', () => {
  it('renders correctly component', () => {
    cy.viewport(284, 50)

    cy.mount(TicTacToeChoosePlayer)

    cy.get('.TicTacToeChoosePlayer')

    cy.get('.UIText.title').contains('Choose a player')

    cy.get(
      `[data-test="ui-radio-input-tic-tac-toc-choose-player-player-${ETicTacToePlayerSign.PLAYER_O}"]`,
    )
      .click()
      .should('be.checked')

    cy.get(
      `[data-test="ui-radio-label-tic-tac-toc-choose-player-player-${ETicTacToePlayerSign.PLAYER_O}"]`,
    ).contains(ETicTacToePlayerSign.PLAYER_O)

    cy.get(
      `[data-test="ui-radio-input-tic-tac-toc-choose-player-player-${ETicTacToePlayerSign.PLAYER_X}"]`,
    )
      .click()
      .should('be.checked')

    cy.get(
      `[data-test="ui-radio-label-tic-tac-toc-choose-player-player-${ETicTacToePlayerSign.PLAYER_X}"]`,
    ).contains(ETicTacToePlayerSign.PLAYER_X)
  })
})
