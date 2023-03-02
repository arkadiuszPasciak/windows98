import { createTestingPinia } from '@pinia/testing'
import TicTacToeFormStart from '@Bundles/TicTacToeBundle/Components/TicTacToeFormStart.vue'
import TicTacToeChooseDimensionTesting from '@Bundles/TicTacToeBundle/Services/TicTacToeChooseDimensionTesting.services'
import TicTacToeEnterYourNameTesting from '@Bundles/TicTacToeBundle/Services/TicTacToeEnterYourNameTesting.services'
import { ETicTacToePlayerSign } from '@Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

const TicTacToeChooseDimensionTestingService =
  new TicTacToeChooseDimensionTesting()
const TicTacToeEnterYourNameTestingService = new TicTacToeEnterYourNameTesting()

describe('[TicTacToeBundle]<Components>(TicTacToeFormStart)', () => {
  it('renders correctly component and send form', () => {
    cy.viewport(284, 180)

    cy.mount(TicTacToeFormStart, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            stubActions: false,
          }),
        ],
      },
    })

    cy.get('form.TicTacToeFormStart')

    TicTacToeEnterYourNameTestingService.checkInputField(
      'Arkadiusz',
      'Enter your name',
    )

    cy.get(
      `[data-test="ui-radio-input-tic-tac-toc-choose-player-player-${ETicTacToePlayerSign.PLAYER_O}"]`,
    )
      .click()
      .should('be.checked')

    cy.get(
      `[data-test="ui-radio-label-tic-tac-toc-choose-player-player-${ETicTacToePlayerSign.PLAYER_O}"]`,
    ).contains(ETicTacToePlayerSign.PLAYER_O)

    TicTacToeChooseDimensionTestingService.checkInputRadio3x3()

    cy.get(`button.UIButton[data-test="tic-tac-toe-form-button"]`)
      .contains('Start')
      .click()

    cy.get('form.TicTacToeFormStart').should('not.exist')
  })

  it('renders correctly component and catch error', () => {
    cy.viewport(284, 180)

    cy.mount(TicTacToeFormStart, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            stubActions: false,
          }),
        ],
      },
    })

    cy.get('[data-test="ui-input-tic-tac-toe-enter-your-name"]').clear()

    cy.get('form.TicTacToeFormStart')
  })
})
