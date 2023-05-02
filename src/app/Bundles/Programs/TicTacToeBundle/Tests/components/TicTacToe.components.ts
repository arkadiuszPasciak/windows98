import { createTestingPinia } from '@pinia/testing'
import TicTacToe from '@APP|Bundles/TicTacToeBundle/Components/TicTacToe.vue'
import TicTacToeChooseDimensionTesting from '@APP|Bundles/TicTacToeBundle/Services/TicTacToeChooseDimensionTesting.services'
import TicTacToeChoosePlayerTesting from '@APP|Bundles/TicTacToeBundle/Services/TicTacToeChoosePlayerTesting.services'
import TicTacToeEnterYourNameTesting from '@APP|Bundles/TicTacToeBundle/Services/TicTacToeEnterYourNameTesting.services'
import TicTacToeGameTesting from '@APP|Bundles/TicTacToeBundle/Services/TicTacToeGameTesting.services'

const TicTacToeChooseDimensionTestingService =
  new TicTacToeChooseDimensionTesting()
const TicTacToeChoosePlayerTestingService = new TicTacToeChoosePlayerTesting()
const TicTacToeEnterYourNameTestingService = new TicTacToeEnterYourNameTesting()
const TicTacToeGameTestingService = new TicTacToeGameTesting()

describe('[TicTacToeBundle]<Components>(TicTacToe)', () => {
  it('renders correctly component', () => {
    cy.viewport(300, 220)

    cy.mount(TicTacToe, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalTicTacToe: true },
            },
            stubActions: false,
          }),
        ],
      },
    })

    cy.get('.TicTacToe')
    cy.get('[data-test="modal-header-title"]').should(
      'have.text',
      'Tic Tac Toe',
    )

    cy.get('form.TicTacToeFormStart')

    TicTacToeEnterYourNameTestingService.checkInputField(
      'Arkadiusz',
      'Enter your name',
    )

    TicTacToeChoosePlayerTestingService.checkInputRadioPlayerO()

    TicTacToeChooseDimensionTestingService.checkInputRadio3x3()

    cy.get(`button.UIButton[data-test="tic-tac-toe-form-button"]`)
      .contains('Start')
      .click()

    cy.get('form.TicTacToeFormStart').should('not.exist')

    TicTacToeGameTestingService.clickAutomaticallyToEndGame()

    cy.get('div.TicTacToeScore')

    cy.get('button.UIButton').contains('New game').click()

    cy.get('div.TicTacToeScore').should('not.exist')

    cy.get('form.TicTacToeFormStart')
  })
})
