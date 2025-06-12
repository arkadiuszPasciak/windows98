import type { Maybe } from "@windows98/toolkit"
import type { TicTacToeComputerServiceContract } from "../contracts"
import type { BoardCells, PlayerSign } from "../models"

export class TicTacToeComputerService
	implements TicTacToeComputerServiceContract
{
	public determineNextMove(
		boardCells: BoardCells,
		boardSize: number,
		computerSign: PlayerSign,
	): Maybe<number> {
		const adjacentIndex = this.findAdjacentEmptyCell(
			boardCells,
			boardSize,
			computerSign,
		)
		if (adjacentIndex !== null && adjacentIndex !== undefined) {
			return adjacentIndex
		}

		const diagonalIndex = this.findDiagonalEmptyCell(
			boardCells,
			boardSize,
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
		boardSize: number,
		computerSign: PlayerSign,
	): Maybe<number> {
		const isLeftCellEmpty = (cellIndex: number): boolean =>
			cellIndex % boardSize !== 0 && boardCells[cellIndex - 1] === ""

		const isRightCellEmpty = (cellIndex: number): boolean =>
			(cellIndex + 1) % boardSize !== 0 && boardCells[cellIndex + 1] === ""

		const isTopCellEmpty = (cellIndex: number): boolean =>
			cellIndex - boardSize >= 0 && boardCells[cellIndex - boardSize] === ""

		const isBottomCellEmpty = (cellIndex: number): boolean =>
			cellIndex + boardSize < boardCells.length &&
			boardCells[cellIndex + boardSize] === ""

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
					return cellIndex - boardSize
				}

				if (isBottomCellEmpty(cellIndex)) {
					return cellIndex + boardSize
				}
			}
		}

		return null
	}

	private findDiagonalEmptyCell(
		boardCells: BoardCells,
		boardSize: number,
		computerSign: PlayerSign,
	): Maybe<number> {
		const isTopLeftCellEmpty = (cellIndex: number): boolean =>
			cellIndex % boardSize !== 0 &&
			cellIndex - boardSize - 1 >= 0 &&
			boardCells[cellIndex - boardSize - 1] === ""

		const isTopRightCellEmpty = (cellIndex: number): boolean =>
			(cellIndex + 1) % boardSize !== 0 &&
			cellIndex - boardSize + 1 >= 0 &&
			boardCells[cellIndex - boardSize + 1] === ""

		const isBottomLeftCellEmpty = (cellIndex: number): boolean =>
			cellIndex % boardSize !== 0 &&
			cellIndex + boardSize - 1 < boardCells.length &&
			boardCells[cellIndex + boardSize - 1] === ""

		const isBottomRightCellEmpty = (cellIndex: number): boolean =>
			(cellIndex + 1) % boardSize !== 0 &&
			cellIndex + boardSize + 1 < boardCells.length &&
			boardCells[cellIndex + boardSize + 1] === ""

		for (let cellIndex = 0; cellIndex < boardCells.length; cellIndex++) {
			const cell = boardCells[cellIndex]

			if (cell === computerSign) {
				if (isTopLeftCellEmpty(cellIndex)) {
					return cellIndex - boardSize - 1
				}

				if (isTopRightCellEmpty(cellIndex)) {
					return cellIndex - boardSize + 1
				}

				if (isBottomLeftCellEmpty(cellIndex)) {
					return cellIndex + boardSize - 1
				}

				if (isBottomRightCellEmpty(cellIndex)) {
					return cellIndex + boardSize + 1
				}
			}
		}

		return null
	}

	private findRandomEmptyCell(boardCells: BoardCells): Maybe<number> {
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
