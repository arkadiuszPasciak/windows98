import { Nullable } from "vitest"
import { TicTacToeBoard } from "@APP|Bundles/TicTacToeBundle/Services/TicTacToeBoard.services"
import { TicTacToeCheckStatusGame } from "@APP|Bundles/TicTacToeBundle/Services/TicTacToeCheckStatusGame.services"
import { TicTacToeWinningStates } from "@APP|Bundles/TicTacToeBundle/Services/TicTacToeWinningStates.services"
import { TTicTacToeCheckStatusGame } from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports"
import {
	ETicTacToeRadioPlayer,
	TTicTacToeRadioDimension,
	TTicTacToeRadioPlayer,
} from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import {
	ETicTacToePlayerSign,
	TTicTacToePlayerSign,
} from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports"

export class TicTacToeGame {
	private readonly dimension: TTicTacToeRadioDimension
	private readonly TicTacToeBoardService: TicTacToeBoard
	private readonly TicTacToeCheckStatusGameService: TicTacToeCheckStatusGame
	private readonly TicTacToeWinningStatesService: TicTacToeWinningStates
	private currentBoard: Array<string>

	constructor(dimension: TTicTacToeRadioDimension) {
		this.dimension = dimension
		this.TicTacToeWinningStatesService = new TicTacToeWinningStates(
			this.dimension,
		)
		this.TicTacToeCheckStatusGameService = new TicTacToeCheckStatusGame()
		this.TicTacToeBoardService = new TicTacToeBoard(this.dimension)
		this.currentBoard = this.TicTacToeBoardService.currentBoard
	}

	public makeMove(
		event: Event,
		playerType: TTicTacToeRadioPlayer,
		computerType: TTicTacToeRadioPlayer,
	): void {
		this.makePlayerMove(event, playerType)

		const isPlayerWin = this.checkStatusGame(playerType)

		if (isPlayerWin) {
			throw isPlayerWin
		}

		this.makeComputerMove(computerType)

		const isComputerWin = this.checkStatusGame(computerType)

		if (isComputerWin) {
			throw isComputerWin
		}
	}

	private checkStatusGame(
		playerType: TTicTacToeRadioPlayer,
	): Nullable<TTicTacToeCheckStatusGame> {
		const sign = this.getSign(playerType)

		const statusGame = this.TicTacToeCheckStatusGameService.checkStatusGame(
			sign,
			this.TicTacToeWinningStatesService.winningStates,
			this.currentBoard,
		)

		return statusGame
	}

	private makeComputerMove(computerType: TTicTacToeRadioPlayer): void {
		const cells = [] as Array<number>

		for (let index = 1; index <= 9; index++) {
			if (this.currentBoard[index - 1] === "") {
				cells.push(index)
			}
		}

		const randomNumber = Math.floor(Math.random() * cells.length) as number

		this.updateFieldOnBoardByComputer(cells[randomNumber], computerType)
	}

	private makePlayerMove(
		event: Event,
		playerType: TTicTacToeRadioPlayer,
	): void {
		this.updateFieldOnBoardByPlayer(event, playerType)
	}

	private updateFieldOnBoard(
		eventTarget: HTMLButtonElement,
		type: TTicTacToeRadioPlayer,
	): void {
		const sign = this.getSign(type)

		eventTarget.textContent = sign
		eventTarget.setAttribute("disabled", "true")
		eventTarget.classList.add(`is-${type}`)

		const dataField = (Number(eventTarget.getAttribute("data-field")) -
      1) as number

		this.currentBoard[dataField] = sign
	}

	private updateFieldOnBoardByComputer(
		fieldNumber: number,
		computerType: TTicTacToeRadioPlayer,
	): void {
		const eventTarget = document.querySelector(
			`button[data-field="${fieldNumber}"]`,
		) as HTMLButtonElement

		this.updateFieldOnBoard(eventTarget, computerType)
	}

	private updateFieldOnBoardByPlayer(
		event: Event,
		playerType: TTicTacToeRadioPlayer,
	): void {
		const eventTarget = event.target as HTMLButtonElement

		this.updateFieldOnBoard(eventTarget, playerType)
	}

	private getSign(playerType: TTicTacToeRadioPlayer): TTicTacToePlayerSign {
		return playerType === ETicTacToeRadioPlayer.PLAYER_O
			? ETicTacToePlayerSign.PLAYER_O
			: ETicTacToePlayerSign.PLAYER_X
	}
}
