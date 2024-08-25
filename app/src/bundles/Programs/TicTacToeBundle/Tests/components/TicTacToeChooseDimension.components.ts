import TicTacToeChooseDimensionTesting from "@APP/src/bundles/Programs/TicTacToeBundle/Services/TicTacToeChooseDimensionTesting.services"
import TicTacToeChooseDimension from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeChooseDimension.vue"

const TicTacToeChooseDimensionTestingService =
	new TicTacToeChooseDimensionTesting()

describe("[TicTacToeBundle]<Components>(TicTacToeChooseDimension)", () => {
	it("renders correctly component", () => {
		cy.viewport(284, 50)

		cy.mount(TicTacToeChooseDimension)

		TicTacToeChooseDimensionTestingService.checkInputRadio3x3()
	})
})
