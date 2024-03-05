import TicTacToePlayers from "@APP|Bundles/TicTacToeBundle/Components/TicTacToePlayers.vue"
import { ETicTacToeRadioPlayer } from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import { ETicTacToePlayerSign } from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports"

describe("[TicTacToeBundle]<Components>(TicTacToePlayers)", () => {
	it("renders correctly component with userName Arkadiusz and userSign PLAYER_O", () => {
		cy.viewport(284, 50)

		cy.mount(TicTacToePlayers, {
			props: {
				userName: "Arkadiusz",
				userSign: ETicTacToeRadioPlayer.PLAYER_O,
			},
		})

		cy.get("div.TicTacToePlayers")

		cy.get("[data-test=\"ui-frame-arkadiusz\"]")
		cy.get("[data-test=\"ui-frame-arkadiusz\"] > p.UIText.title").contains(
			"Arkadiusz",
		)
		cy.get("[data-test=\"ui-frame-arkadiusz\"] > span.sign")
			.contains(ETicTacToePlayerSign.PLAYER_O)
			.should("have.attr", "style", "color: rgb(0, 0, 255);")

		cy.get("[data-test=\"ui-frame-computer\"]")
		cy.get("[data-test=\"ui-frame-computer\"] > p.UIText.title").contains(
			"Computer",
		)
		cy.get("[data-test=\"ui-frame-computer\"] > span.sign")
			.contains(ETicTacToePlayerSign.PLAYER_X)
			.should("have.attr", "style", "color: rgb(254, 0, 0);")
	})

	it("renders correctly component with userName Elon and userSign PLAYER_X", () => {
		cy.viewport(284, 50)

		cy.mount(TicTacToePlayers, {
			props: {
				userName: "Elon",
				userSign: ETicTacToeRadioPlayer.PLAYER_X,
			},
		})

		cy.get("div.TicTacToePlayers")

		cy.get("[data-test=\"ui-frame-elon\"]")
		cy.get("[data-test=\"ui-frame-elon\"] > p.UIText.title").contains("Elon")
		cy.get("[data-test=\"ui-frame-elon\"] > span.sign")
			.contains(ETicTacToePlayerSign.PLAYER_X)
			.should("have.attr", "style", "color: rgb(254, 0, 0);")

		cy.get("[data-test=\"ui-frame-computer\"]")
		cy.get("[data-test=\"ui-frame-computer\"] > p.UIText.title").contains(
			"Computer",
		)
		cy.get("[data-test=\"ui-frame-computer\"] > span.sign")
			.contains(ETicTacToePlayerSign.PLAYER_O)
			.should("have.attr", "style", "color: rgb(0, 0, 255);")
	})
})
