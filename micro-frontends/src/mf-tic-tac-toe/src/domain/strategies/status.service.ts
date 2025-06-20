import type { TicTacToeStatusStrategyContract } from "../contracts"
import {
	type BoardCells,
	GameStatus,
	type GameStatusResult,
	type PlayerSign,
} from "../models"

export class TicTacToeStatusStrategy
	implements TicTacToeStatusStrategyContract
{
	public evaluateStatus(
		boardCells: BoardCells,
		player: PlayerSign,
	): GameStatusResult {
		const size = this.getBoardSize(boardCells)

		const isBoardSquare = this.isBoardSquare(size)
		if (!isBoardSquare) {
			return {
				status: GameStatus.ERROR,
				winner: undefined,
			}
		}

		const checkRows = this.checkRows(boardCells, player, size)
		if (checkRows) {
			return {
				status: GameStatus.COMPLETED,
				winner: player,
			}
		}

		const checkColumns = this.checkColumns(boardCells, player, size)
		if (checkColumns) {
			return {
				status: GameStatus.COMPLETED,
				winner: player,
			}
		}

		const checkAntiDiagonal = this.checkAntiDiagonal(boardCells, player, size)
		if (checkAntiDiagonal) {
			return {
				status: GameStatus.COMPLETED,
				winner: player,
			}
		}

		const checkMainDiagonal = this.checkMainDiagonal(boardCells, player, size)
		if (checkMainDiagonal) {
			return {
				status: GameStatus.COMPLETED,
				winner: player,
			}
		}

		const checkDraw = this.checkDraw(boardCells)
		if (checkDraw) {
			return {
				status: GameStatus.DRAW,
				winner: undefined,
			}
		}

		return {
			status: GameStatus.IN_PROGRESS,
			winner: undefined,
		}
	}

	private checkAntiDiagonal(
		boardCells: BoardCells,
		player: PlayerSign,
		size: number,
	): boolean {
		if (
			Array.from(
				{ length: size },
				(_, index) => boardCells[(index + 1) * (size - 1)],
			).every((cell) => cell === player)
		) {
			return true
		}

		return false
	}

	private checkColumns(
		boardCells: BoardCells,
		player: PlayerSign,
		size: number,
	): boolean {
		for (let column = 0; column < size; column++) {
			let win = true

			for (let row = 0; row < size; row++) {
				if (boardCells[row * size + column] !== player) {
					win = false
					break
				}
			}

			if (win) return true
		}

		return false
	}

	private checkDraw(boardCells: BoardCells): boolean {
		return boardCells.every((cell) => cell !== undefined && cell !== "")
	}

	private checkMainDiagonal(
		boardCells: BoardCells,
		player: PlayerSign,
		size: number,
	): boolean {
		if (
			Array.from(
				{ length: size },
				(_, index) => boardCells[index * (size + 1)],
			).every((cell) => cell === player)
		) {
			return true
		}

		return false
	}

	private checkRows(
		boardCells: BoardCells,
		player: PlayerSign,
		size: number,
	): boolean {
		for (let row = 0; row < size; row++) {
			if (
				boardCells
					.slice(row * size, (row + 1) * size)
					.every((cell) => cell === player)
			) {
				return true
			}
		}

		return false
	}

	private isBoardSquare(size: number): boolean {
		if (!Number.isInteger(size)) {
			return false
		}

		return true
	}

	private getBoardSize(boardCells: BoardCells): number {
		return Math.sqrt(boardCells.length)
	}
}
