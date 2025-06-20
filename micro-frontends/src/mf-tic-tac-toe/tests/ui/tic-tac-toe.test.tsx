import { expect, test } from "@playwright/experimental-ct-react"
import { MFTicTacToe } from "../../src/ui/views/tic-tac-toe"

async function playGameToEnd(
	component: ReturnType<(typeof test)["extend"]>["prototype"],
	boardTestId = "mf-tic-tac-toe-game-board",
	modalTestId = "mf-tic-tac-toe-game-result-modal-container",
) {
	const board = component.getByTestId(boardTestId)
	const boardButtons = await board.locator("button").all()
	for (let index = 0; index < boardButtons.length; index++) {
		const button = boardButtons[index]
		if (await button.isEnabled()) {
			await button.click()
		}
		const modal = component.getByTestId(modalTestId)
		if (await modal.isVisible()) {
			break
		}
	}
}

test.describe("MFTicTacToe", () => {
	test("User can start and finish a game", async ({ mount }) => {
		const component = await mount(<MFTicTacToe onCloseProgram={() => {}} />)

		const nameInput = component.getByTestId(
			"ds-input-input-mf-tic-tac-toe-starter-enter-your-name",
		)
		await nameInput.fill("Wilhelm")

		const signXRadio = component.getByTestId(
			"mf-tic-tac-toe-starter-choose-player-sign-x-radio-input",
		)
		await signXRadio.check()

		const dimension3x3Radio = component.getByTestId(
			"mf-tic-tac-toe-starter-choose-dimension-3x3-radio-input",
		)
		await dimension3x3Radio.check()

		const startButton = component.getByTestId(
			"mf-tic-tac-toe-starter-start-game-button",
		)
		await expect(
			startButton,
			"Start button is enabled after filling form",
		).toBeEnabled()
		await startButton.click()

		await playGameToEnd(component)

		const resultModal = component.getByTestId(
			"mf-tic-tac-toe-game-result-modal-container",
		)
		await expect(
			resultModal,
			"Result modal is showed after the end game",
		).toBeVisible()

		const newGameButton = component.getByTestId(
			"mf-tic-tac-toe-game-result-new-game-button",
		)
		await newGameButton.click()

		await expect(
			resultModal,
			"Modal is closed after clicking new game",
		).toBeHidden()
	})
})
