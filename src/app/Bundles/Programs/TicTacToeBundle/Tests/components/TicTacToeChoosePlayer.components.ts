import TicTacToeChoosePlayer from '@APP|Bundles/TicTacToeBundle/Components/TicTacToeChoosePlayer.vue'
import TicTacToeChoosePlayerTesting from '@APP|Bundles/TicTacToeBundle/Services/TicTacToeChoosePlayerTesting.services'

const TicTacToeChoosePlayerTestingService = new TicTacToeChoosePlayerTesting()

describe('[TicTacToeBundle]<Components>(TicTacToeChoosePlayer)', () => {
  it('renders correctly component', () => {
    cy.viewport(284, 50)

    cy.mount(TicTacToeChoosePlayer)

    TicTacToeChoosePlayerTestingService.checkInputRadioPlayerO()

    TicTacToeChoosePlayerTestingService.checkInputRadioPlayerX()
  })
})
