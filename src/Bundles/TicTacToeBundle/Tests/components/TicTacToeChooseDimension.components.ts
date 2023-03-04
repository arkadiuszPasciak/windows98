import TicTacToeChooseDimension from '@Bundles/TicTacToeBundle/Components/TicTacToeChooseDimension.vue'
import TicTacToeChooseDimensionTesting from '@Bundles/TicTacToeBundle/Services/TicTacToeChooseDimensionTesting.services'

const TicTacToeChooseDimensionTestingService =
  new TicTacToeChooseDimensionTesting()

describe('[TicTacToeBundle]<Components>(TicTacToeChooseDimension)', () => {
  it('renders correctly component', () => {
    cy.viewport(284, 50)

    cy.mount(TicTacToeChooseDimension)

    TicTacToeChooseDimensionTestingService.checkInputRadio3x3()
  })
})
