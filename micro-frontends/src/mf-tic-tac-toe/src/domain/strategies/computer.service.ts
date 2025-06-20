import type { Maybe } from "@windows98/toolkit"
import type { TicTacToeComputerStrategyContract } from "../contracts"
import type {
	BoardCellIndex,
	BoardCells,
	BoardType,
	PlayerSign,
} from "../models"

export class TicTacToeComputerStrategy
	implements TicTacToeComputerStrategyContract
{
	public determineNextMove(
		boardCells: BoardCells,
		boardType: BoardType,
		computerSign: PlayerSign,
	): BoardCellIndex {
		const adjacentIndex = this.findAdjacentEmptyCell(
			boardCells,
			boardType,
			computerSign,
		)
		if (adjacentIndex !== null && adjacentIndex !== undefined) {
			return adjacentIndex
		}

		const diagonalIndex = this.findDiagonalEmptyCell(
			boardCells,
			boardType,
			computerSign,
		)
		if (diagonalIndex !== null && diagonalIndex !== undefined) {
			return diagonalIndex
		}

		const randomIndex = this.findRandomEmptyCell(boardCells)

		if (randomIndex === null) {
			throw new Error("No empty cells available for the computer to play.")
		}

		return randomIndex
	}

	private findAdjacentEmptyCell(
		boardCells: BoardCells,
		boardType: BoardType,
		computerSign: PlayerSign,
	): Maybe<BoardCellIndex> {
		const isLeftCellEmpty = (cellIndex: number): boolean =>
			cellIndex % boardType !== 0 && boardCells[cellIndex - 1] === ""

		const isRightCellEmpty = (cellIndex: number): boolean =>
			(cellIndex + 1) % boardType !== 0 && boardCells[cellIndex + 1] === ""

		const isTopCellEmpty = (cellIndex: number): boolean =>
			cellIndex - boardType >= 0 && boardCells[cellIndex - boardType] === ""

		const isBottomCellEmpty = (cellIndex: number): boolean =>
			cellIndex + boardType < boardCells.length &&
			boardCells[cellIndex + boardType] === ""

		for (let cellIndex = 0; cellIndex < boardCells.length; cellIndex++) {
			const cell = boardCells[cellIndex]

			if (cell === computerSign) {
				if (isLeftCellEmpty(cellIndex)) {
					return cellIndex - 1
				}

				if (isRightCellEmpty(cellIndex)) {
					return cellIndex + 1
				}

				if (isTopCellEmpty(cellIndex)) {
					return cellIndex - boardType
				}

				if (isBottomCellEmpty(cellIndex)) {
					return cellIndex + boardType
				}
			}
		}

		return null
	}

	private findDiagonalEmptyCell(
		boardCells: BoardCells,
		boardType: BoardType,
		computerSign: PlayerSign,
	): Maybe<BoardCellIndex> {
		const isTopLeftCellEmpty = (cellIndex: number): boolean =>
			cellIndex % boardType !== 0 &&
			cellIndex - boardType - 1 >= 0 &&
			boardCells[cellIndex - boardType - 1] === ""

		const isTopRightCellEmpty = (cellIndex: number): boolean =>
			(cellIndex + 1) % boardType !== 0 &&
			cellIndex - boardType + 1 >= 0 &&
			boardCells[cellIndex - boardType + 1] === ""

		const isBottomLeftCellEmpty = (cellIndex: number): boolean =>
			cellIndex % boardType !== 0 &&
			cellIndex + boardType - 1 < boardCells.length &&
			boardCells[cellIndex + boardType - 1] === ""

		const isBottomRightCellEmpty = (cellIndex: number): boolean =>
			(cellIndex + 1) % boardType !== 0 &&
			cellIndex + boardType + 1 < boardCells.length &&
			boardCells[cellIndex + boardType + 1] === ""

		for (let cellIndex = 0; cellIndex < boardCells.length; cellIndex++) {
			const cell = boardCells[cellIndex]

			if (cell === computerSign) {
				if (isTopLeftCellEmpty(cellIndex)) {
					return cellIndex - boardType - 1
				}

				if (isTopRightCellEmpty(cellIndex)) {
					return cellIndex - boardType + 1
				}

				if (isBottomLeftCellEmpty(cellIndex)) {
					return cellIndex + boardType - 1
				}

				if (isBottomRightCellEmpty(cellIndex)) {
					return cellIndex + boardType + 1
				}
			}
		}

		return null
	}

	private findRandomEmptyCell(boardCells: BoardCells): Maybe<BoardCellIndex> {
		const emptyIndices: number[] = []
		for (let cellIndex = 0; cellIndex < boardCells.length; cellIndex++) {
			const cell = boardCells[cellIndex]
			if (cell === "") {
				emptyIndices.push(cellIndex)
			}
		}

		if (emptyIndices.length === 0) {
			return null
		}

		const randomIdx = Math.floor(Math.random() * emptyIndices.length)
		return emptyIndices[randomIdx]
	}
}
