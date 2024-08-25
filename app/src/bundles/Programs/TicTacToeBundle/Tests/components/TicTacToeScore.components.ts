import { ETicTacToeStatusGame } from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports"
import { ETicTacToeRadioPlayer } from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import TicTacToeScore from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeScore.vue"
import { createTestingPinia } from "@pinia/testing"

describe("[TicTacToeBundle]<Components>(TicTacToeScore)", () => {
	it("renders correctly component and user has won", () => {
		cy.viewport(190, 110)

		cy.mount(TicTacToeScore, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						initialState: {
							"tic-tac-toe": {
								form: {
									data: {
										userName: "Arkadiusz",
										playerType: ETicTacToeRadioPlayer.PLAYER_O,
									},
								},
								game: {
									status: ETicTacToeStatusGame.WINNER_O,
									scoreModal: true,
								},
							},
						},
						stubActions: false,
					}),
				],
			},
		})

		cy.get("div.TicTacToeScore")

		cy.get("p.UIText.title").contains("Arkadiusz has won!")

		cy.get("button.UIButton").contains("New game").click()

		cy.get("div.TicTacToeScore").should("not.exist")
	})

	it("renders correctly component and computer has won", () => {
		cy.viewport(190, 110)

		cy.mount(TicTacToeScore, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						initialState: {
							"tic-tac-toe": {
								form: {
									data: {
										playerType: ETicTacToeRadioPlayer.PLAYER_X,
									},
								},
								game: {
									status: ETicTacToeStatusGame.WINNER_O,
									scoreModal: true,
								},
							},
						},
						stubActions: false,
					}),
				],
			},
		})

		cy.get("div.TicTacToeScore")

		cy.get("p.UIText.title").contains("Computer has won!")

		cy.get("button.UIButton").contains("New game").click()

		cy.get("div.TicTacToeScore").should("not.exist")
	})

	it("renders correctly component and draw", () => {
		cy.viewport(190, 110)

		cy.mount(TicTacToeScore, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						initialState: {
							"tic-tac-toe": {
								game: {
									status: ETicTacToeStatusGame.DRAW,
									scoreModal: true,
								},
							},
						},
						stubActions: false,
					}),
				],
			},
		})

		cy.get("div.TicTacToeScore")

		cy.get("p.UIText.title").contains("Draw!")

		cy.get("button.UIButton").contains("New game").click()

		cy.get("div.TicTacToeScore").should("not.exist")
	})
})
