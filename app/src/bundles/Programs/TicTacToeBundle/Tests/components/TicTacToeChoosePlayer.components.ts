import TicTacToeChoosePlayerTesting from "@APP/src/bundles/Programs/TicTacToeBundle/Services/TicTacToeChoosePlayerTesting.services"
import TicTacToeChoosePlayer from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeChoosePlayer.vue"

const TicTacToeChoosePlayerTestingService = new TicTacToeChoosePlayerTesting()

describe("[TicTacToeBundle]<Components>(TicTacToeChoosePlayer)", () => {
	it("renders correctly component", () => {
		cy.viewport(284, 50)

		cy.mount(TicTacToeChoosePlayer)

		TicTacToeChoosePlayerTestingService.checkInputRadioPlayerO()

		TicTacToeChoosePlayerTestingService.checkInputRadioPlayerX()
	})
})
