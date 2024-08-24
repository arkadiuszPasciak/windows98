import TicTacToeEnterYourNameTesting from "@APP/src/bundles/Programs/TicTacToeBundle/Services/TicTacToeEnterYourNameTesting.services"
import TicTacToeEnterYourName from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeEnterYourName.vue"

const TicTacToeEnterYourNameTestingService = new TicTacToeEnterYourNameTesting()

describe("[TicTacToeBundle]<Components>(TicTacToeEnterYourName)", () => {
	it("renders correctly component", () => {
		cy.viewport(284, 50)

		cy.mount(TicTacToeEnterYourName)

		TicTacToeEnterYourNameTestingService.checkInputField(
			"Arkadiusz",
			"Enter your name",
		)
	})
})
