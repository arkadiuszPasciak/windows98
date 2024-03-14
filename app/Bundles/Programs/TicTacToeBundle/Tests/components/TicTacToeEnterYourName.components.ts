import TicTacToeEnterYourName from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeEnterYourName.vue"
import TicTacToeEnterYourNameTesting from "@APP|Bundles/TicTacToeBundle/Services/TicTacToeEnterYourNameTesting.services"

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
