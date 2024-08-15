import TicTacToeFormStart from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeFormStart.vue"
import TicTacToeChooseDimensionTesting from "@APP|Bundles/TicTacToeBundle/Services/TicTacToeChooseDimensionTesting.services"
import TicTacToeChoosePlayerTesting from "@APP|Bundles/TicTacToeBundle/Services/TicTacToeChoosePlayerTesting.services"
import TicTacToeEnterYourNameTesting from "@APP|Bundles/TicTacToeBundle/Services/TicTacToeEnterYourNameTesting.services"
import { createTestingPinia } from "@pinia/testing"

const TicTacToeChooseDimensionTestingService =
	new TicTacToeChooseDimensionTesting()
const TicTacToeChoosePlayerTestingService = new TicTacToeChoosePlayerTesting()
const TicTacToeEnterYourNameTestingService = new TicTacToeEnterYourNameTesting()

describe("[TicTacToeBundle]<Components>(TicTacToeFormStart)", () => {
	it("renders correctly component and send form", () => {
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

		cy.get("form.TicTacToeFormStart")

		TicTacToeEnterYourNameTestingService.checkInputField(
			"Arkadiusz",
			"Enter your name",
		)

		TicTacToeChoosePlayerTestingService.checkInputRadioPlayerO()

		TicTacToeChooseDimensionTestingService.checkInputRadio3x3()

		cy.get('button.UIButton[data-test="tic-tac-toe-form-button"]')
			.contains("Start")
			.click()

		cy.get("form.TicTacToeFormStart").should("not.exist")
	})

	it("renders correctly component and catch error", () => {
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

		cy.get("form.TicTacToeFormStart")
	})
})
