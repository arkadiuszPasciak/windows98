import {
	ETicTacToePlayerSign,
	type TTicTacToePlayerSign,
} from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToePlayers.supports"

export default class TicTacToeChoosePlayerTesting {
	public checkInputRadioPlayerO(): void {
		this.checkInputRadio(ETicTacToePlayerSign.PLAYER_O)
	}

	public checkInputRadioPlayerX(): void {
		this.checkInputRadio(ETicTacToePlayerSign.PLAYER_X)
	}

	private checkInputRadio(sign: TTicTacToePlayerSign): void {
		this.isMainElementRender()

		this.checkLabelValue()

		this.checkInputValue(sign)

		this.chooseInput(sign)

		this.isInputChecked(sign)
	}

	private checkInputValue(sign: TTicTacToePlayerSign): void {
		cy.get(
			`[data-test="ui-radio-label-tic-tac-toc-choose-player-player-${sign}"]`,
		).contains(sign)
	}

	private checkLabelValue(): void {
		cy.get(".UIText.title").contains("Choose a player")
	}

	private chooseInput(sign: TTicTacToePlayerSign): void {
		cy.get(
			`[data-test="ui-radio-input-tic-tac-toc-choose-player-player-${sign}"]`,
		).click()
	}

	private isInputChecked(sign: TTicTacToePlayerSign): void {
		cy.get(
			`[data-test="ui-radio-input-tic-tac-toc-choose-player-player-${sign}"]`,
		).should("be.checked")
	}

	private isMainElementRender(): void {
		cy.get(".TicTacToeChoosePlayer")
	}
}
