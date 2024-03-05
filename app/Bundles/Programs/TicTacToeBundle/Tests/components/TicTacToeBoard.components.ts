import { createTestingPinia } from "@pinia/testing"
import TicTacToeBoard from "@APP|Bundles/TicTacToeBundle/Components/TicTacToeBoard.vue"
import { ETicTacToeRadioDimension } from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports"

describe("[TicTacToeBundle]<Components>(TicTacToeBoard)", async () => {
	it("renders correctly component with dimension 3x3", () => {
		cy.viewport(95, 92)

		cy.mount(TicTacToeBoard, {
			props: {
				dimensionType: ETicTacToeRadioDimension.THREE_X_THREE,
			},
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						stubActions: false,
					}),
				],
			},
		})

		cy.get(".TicTacToeBoard").should(
			"have.attr",
			"style",
			"grid-template-columns: repeat(3, 30px); grid-template-rows: repeat(3, 30px);",
		)

		for (let index = 1; index <= 9; index++) {
			cy.get(`.TicTacToeBoard > .UIButton[data-field="${index}"]`)
				.should("have.attr", "data-field", index)
				.should("have.attr", "type", "button")
				.should("have.text", "")
		}
	})

	it("renders correctly component with dimension 6x6", () => {
		cy.viewport(185, 185)

		cy.mount(TicTacToeBoard, {
			props: {
				dimensionType: ETicTacToeRadioDimension.SIX_X_SIX,
			},
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						stubActions: false,
					}),
				],
			},
		})

		cy.get(".TicTacToeBoard").should(
			"have.attr",
			"style",
			"grid-template-columns: repeat(6, 30px); grid-template-rows: repeat(6, 30px);",
		)

		for (let index = 1; index <= 36; index++) {
			cy.get(`.TicTacToeBoard > .UIButton[data-field="${index}"]`)
				.should("have.attr", "data-field", index)
				.should("have.attr", "type", "button")
				.should("have.text", "")
		}
	})

	it("renders correctly component with dimension 9x9", () => {
		cy.viewport(278, 278)

		cy.mount(TicTacToeBoard, {
			props: {
				dimensionType: ETicTacToeRadioDimension.NINE_X_NINE,
			},
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						stubActions: false,
					}),
				],
			},
		})

		cy.get(".TicTacToeBoard").should(
			"have.attr",
			"style",
			"grid-template-columns: repeat(9, 30px); grid-template-rows: repeat(9, 30px);",
		)

		for (let index = 1; index <= 81; index++) {
			cy.get(`.TicTacToeBoard > .UIButton[data-field="${index}"]`)
				.should("have.attr", "data-field", index)
				.should("have.attr", "type", "button")
				.should("have.text", "")
		}
	})
})
