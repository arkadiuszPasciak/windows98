import { makeAutoObservable } from "mobx"
import type {
	TicTacToeBoardStrategyContract,
	TicTacToeComputerStrategyContract,
	TicTacToeGameDomainContract,
	TicTacToeStatusStrategyContract,
} from "../contracts"
import {
	type BoardCellIndex,
	type BoardCells,
	BoardType,
	GameStatus,
	type GameStatusResult,
	PlayerSign,
} from "../models"
import {
	TicTacToeBoardStrategy,
	TicTacToeComputerStrategy,
	TicTacToeStatusStrategy,
} from "../strategies"

export class TicTacToeGameDomain implements TicTacToeGameDomainContract {
	constructor() {
		makeAutoObservable(this)
	}

	private readonly ticTacToeBoardStrategy: TicTacToeBoardStrategyContract =
		new TicTacToeBoardStrategy()
	private readonly ticTacToeComputerStrategy: TicTacToeComputerStrategyContract =
		new TicTacToeComputerStrategy()
	private readonly ticTacToeStatusStrategy: TicTacToeStatusStrategyContract =
		new TicTacToeStatusStrategy()

	public boardCells: BoardCells = []
	public currentPlayer = PlayerSign.X
	public computer = { sign: PlayerSign.O }
	public boardType = BoardType.THREE_BY_THREE
	public human = {
		name: "",
		sign: PlayerSign.X,
	}
	public statusResult: GameStatusResult = {
		status: GameStatus.NOT_STARTED,
		winner: undefined,
	}

	public initGame(
		computerSign: PlayerSign,
		boardType: BoardType,
		humanSign: PlayerSign,
		humanName: string,
	): void {
		this.computer.sign = computerSign
		this.boardType = boardType
		this.human.sign = humanSign
		this.human.name = humanName

		this.boardCells = this.ticTacToeBoardStrategy.generateBoard(boardType)
		this.statusResult.status = GameStatus.IN_PROGRESS
		this.currentPlayer = this.human.sign
	}

	public makeMove(boardCellIndex: BoardCellIndex): void {
		const isGameFinished = this.isGameFinished()
		if (isGameFinished) return

		this.humanMove(boardCellIndex)
		this.updateStatus()

		const isGameStillFinished = this.isGameFinished()
		if (isGameStillFinished) return

		this.changeCurrentPlayer()
		this.computerMove()
		this.updateStatus()
		this.changeCurrentPlayer()
	}

	private humanMove(boardCellIndex: BoardCellIndex): void {
		this.ticTacToeBoardStrategy.chooseCell(
			this.boardCells,
			boardCellIndex,
			this.currentPlayer,
		)
	}

	private computerMove(): void {
		const boardCellIndex = this.ticTacToeComputerStrategy.determineNextMove(
			this.boardCells,
			this.boardType,
			this.computer.sign,
		)

		this.ticTacToeBoardStrategy.chooseCell(
			this.boardCells,
			boardCellIndex,
			this.currentPlayer,
		)
	}

	private changeCurrentPlayer(): void {
		this.currentPlayer =
			this.currentPlayer === this.human.sign
				? this.computer.sign
				: this.human.sign
	}

	private updateStatus(): void {
		const status = this.ticTacToeStatusStrategy.evaluateStatus(
			this.boardCells,
			this.currentPlayer,
		)

		this.statusResult.status = status.status
		this.statusResult.winner = status.winner
	}

	private isGameFinished(): boolean {
		switch (this.statusResult.status) {
			case GameStatus.COMPLETED:
			case GameStatus.DRAW:
			case GameStatus.ERROR:
				return true
			default:
				return false
		}
	}
}

export const ticTacToeGameDomain = new TicTacToeGameDomain()
