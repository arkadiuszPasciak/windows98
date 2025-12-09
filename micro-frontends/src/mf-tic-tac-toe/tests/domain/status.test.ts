import { beforeEach, describe, expect, it } from "vitest"
import {
	type BoardCells,
	BoardType,
	GameStatus,
	PlayerSign,
} from "../../src/domain/models"
import { TicTacToeStatusStrategy } from "../../src/domain/strategies"

function generateDrawBoard(size: number): BoardCells {
	return Array.from({ length: size * size }, (_, index) =>
		index % 2 === 0 ? "X" : "O",
	)
}

function generateColumnWinBoard(
	size: number,
	column: number,
	player: PlayerSign,
): BoardCells {
	return Array.from({ length: size * size }, (_, index) =>
		index % size === column ? player : "",
	)
}

function generateRowWinBoard(
	size: number,
	row: number,
	player: PlayerSign,
): BoardCells {
	return Array.from({ length: size * size }, (_, index) =>
		Math.floor(index / size) === row ? player : "",
	)
}

function generateMainDiagonalWinBoard(
	size: number,
	player: PlayerSign,
): BoardCells {
	return Array.from({ length: size * size }, (_, index) =>
		index % (size + 1) === 0 ? player : "",
	)
}

function generateAntiDiagonalWinBoard(
	size: number,
	player: PlayerSign,
): BoardCells {
	return Array.from({ length: size * size }, (_, index) =>
		index > 0 && index % (size - 1) === 0 && index < size * size - 1
			? player
			: "",
	)
}

const notSquareBoard = {
	twoByThree: ["", "", "", "", "", ""],
	fourByTwo: ["", "", "", "", "", "", "", ""],
	fiveCells: ["", "", "", "", ""],
	sevenCells: ["", "", "", "", "", "", ""],
}

const boardMocks = {
	[BoardType.THREE_BY_THREE]: {
		draw: generateDrawBoard(3),
		column: [
			generateColumnWinBoard(3, 0, PlayerSign.X),
			generateColumnWinBoard(3, 1, PlayerSign.O),
			generateColumnWinBoard(3, 2, PlayerSign.X),
		],
		row: [
			generateRowWinBoard(3, 0, PlayerSign.X),
			generateRowWinBoard(3, 1, PlayerSign.O),
			generateRowWinBoard(3, 2, PlayerSign.X),
		],
		mainDiagonal: generateMainDiagonalWinBoard(3, PlayerSign.X),
		antiDiagonal: generateAntiDiagonalWinBoard(3, PlayerSign.O),
	},
	[BoardType.SIX_BY_SIX]: {
		draw: generateDrawBoard(6),
		column: [
			generateColumnWinBoard(6, 0, PlayerSign.X),
			generateColumnWinBoard(6, 1, PlayerSign.O),
			generateColumnWinBoard(6, 2, PlayerSign.X),
			generateColumnWinBoard(6, 3, PlayerSign.O),
			generateColumnWinBoard(6, 4, PlayerSign.X),
			generateColumnWinBoard(6, 5, PlayerSign.O),
		],
		row: [
			generateRowWinBoard(6, 0, PlayerSign.X),
			generateRowWinBoard(6, 1, PlayerSign.O),
			generateRowWinBoard(6, 2, PlayerSign.X),
			generateRowWinBoard(6, 3, PlayerSign.O),
			generateRowWinBoard(6, 4, PlayerSign.X),
			generateRowWinBoard(6, 5, PlayerSign.O),
		],
		mainDiagonal: generateMainDiagonalWinBoard(6, PlayerSign.X),
		antiDiagonal: generateAntiDiagonalWinBoard(6, PlayerSign.O),
	},
	[BoardType.NINE_BY_NINE]: {
		draw: generateDrawBoard(9),
		column: [
			generateColumnWinBoard(9, 0, PlayerSign.X),
			generateColumnWinBoard(9, 1, PlayerSign.O),
			generateColumnWinBoard(9, 2, PlayerSign.X),
			generateColumnWinBoard(9, 3, PlayerSign.O),
			generateColumnWinBoard(9, 4, PlayerSign.X),
			generateColumnWinBoard(9, 5, PlayerSign.O),
			generateColumnWinBoard(9, 6, PlayerSign.X),
			generateColumnWinBoard(9, 7, PlayerSign.O),
			generateColumnWinBoard(9, 8, PlayerSign.X),
		],
		row: [
			generateRowWinBoard(9, 0, PlayerSign.X),
			generateRowWinBoard(9, 1, PlayerSign.O),
			generateRowWinBoard(9, 2, PlayerSign.X),
			generateRowWinBoard(9, 3, PlayerSign.O),
			generateRowWinBoard(9, 4, PlayerSign.X),
			generateRowWinBoard(9, 5, PlayerSign.O),
			generateRowWinBoard(9, 6, PlayerSign.X),
			generateRowWinBoard(9, 7, PlayerSign.O),
			generateRowWinBoard(9, 8, PlayerSign.X),
		],
		mainDiagonal: generateMainDiagonalWinBoard(9, PlayerSign.X),
		antiDiagonal: generateAntiDiagonalWinBoard(9, PlayerSign.O),
	},
}

describe("TicTacToeStatusStrategy", () => {
	let ticTacToeStatusStrategy: TicTacToeStatusStrategy

	beforeEach(() => {
		ticTacToeStatusStrategy = new TicTacToeStatusStrategy()
	})

	describe("evaluateStatus", () => {
		it("returns ERROR for not square boards", () => {
			for (const board of Object.values(notSquareBoard)) {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					board,
					PlayerSign.X,
				)
				expect(result.status).toBe(GameStatus.ERROR)
				expect(result.winner).toBeUndefined()
			}
		})

		describe("THREE_BY_THREE", () => {
			it("detects draw", () => {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					boardMocks[BoardType.THREE_BY_THREE].draw,
					PlayerSign.X,
				)
				expect(result.status).toBe(GameStatus.DRAW)
				expect(result.winner).toBeUndefined()
			})

			it("detects win in all columns", () => {
				for (let column = 0; column < 3; column++) {
					const player = column % 2 === 0 ? PlayerSign.X : PlayerSign.O
					const result = ticTacToeStatusStrategy.evaluateStatus(
						boardMocks[BoardType.THREE_BY_THREE].column[column],
						player,
					)
					expect(result.status).toBe(GameStatus.COMPLETED)
					expect(result.winner).toBe(player)
				}
			})

			it("detects win in all rows", () => {
				for (let row = 0; row < 3; row++) {
					const player = row % 2 === 0 ? PlayerSign.X : PlayerSign.O
					const result = ticTacToeStatusStrategy.evaluateStatus(
						boardMocks[BoardType.THREE_BY_THREE].row[row],
						player,
					)
					expect(result.status).toBe(GameStatus.COMPLETED)
					expect(result.winner).toBe(player)
				}
			})

			it("detects win in main diagonal", () => {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					boardMocks[BoardType.THREE_BY_THREE].mainDiagonal,
					PlayerSign.X,
				)
				expect(result.status).toBe(GameStatus.COMPLETED)
				expect(result.winner).toBe(PlayerSign.X)
			})

			it("detects win in anti diagonal", () => {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					boardMocks[BoardType.THREE_BY_THREE].antiDiagonal,
					PlayerSign.O,
				)
				expect(result.status).toBe(GameStatus.COMPLETED)
				expect(result.winner).toBe(PlayerSign.O)
			})

			it("returns IN_PROGRESS for incomplete board", () => {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					["", "", "", "", "", "", "", "", ""],
					PlayerSign.X,
				)
				expect(result.status).toBe(GameStatus.IN_PROGRESS)
				expect(result.winner).toBeUndefined()
			})
		})

		describe("SIX_BY_SIX", () => {
			it("detects draw", () => {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					boardMocks[BoardType.SIX_BY_SIX].draw,
					PlayerSign.X,
				)
				expect(result.status).toBe(GameStatus.DRAW)
				expect(result.winner).toBeUndefined()
			})

			it("detects win in all columns", () => {
				for (let column = 0; column < 6; column++) {
					const player = column % 2 === 0 ? PlayerSign.X : PlayerSign.O
					const result = ticTacToeStatusStrategy.evaluateStatus(
						boardMocks[BoardType.SIX_BY_SIX].column[column],
						player,
					)
					expect(result.status).toBe(GameStatus.COMPLETED)
					expect(result.winner).toBe(player)
				}
			})

			it("detects win in all rows", () => {
				for (let row = 0; row < 6; row++) {
					const player = row % 2 === 0 ? PlayerSign.X : PlayerSign.O
					const result = ticTacToeStatusStrategy.evaluateStatus(
						boardMocks[BoardType.SIX_BY_SIX].row[row],
						player,
					)
					expect(result.status).toBe(GameStatus.COMPLETED)
					expect(result.winner).toBe(player)
				}
			})

			it("detects win in main diagonal", () => {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					boardMocks[BoardType.SIX_BY_SIX].mainDiagonal,
					PlayerSign.X,
				)
				expect(result.status).toBe(GameStatus.COMPLETED)
				expect(result.winner).toBe(PlayerSign.X)
			})

			it("detects win in anti diagonal", () => {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					boardMocks[BoardType.SIX_BY_SIX].antiDiagonal,
					PlayerSign.O,
				)
				expect(result.status).toBe(GameStatus.COMPLETED)
				expect(result.winner).toBe(PlayerSign.O)
			})
		})

		describe("NINE_BY_NINE", () => {
			it("detects draw", () => {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					boardMocks[BoardType.NINE_BY_NINE].draw,
					PlayerSign.X,
				)
				expect(result.status).toBe(GameStatus.DRAW)
				expect(result.winner).toBeUndefined()
			})

			it("detects win in all columns", () => {
				for (let column = 0; column < 9; column++) {
					const player = column % 2 === 0 ? PlayerSign.X : PlayerSign.O
					const result = ticTacToeStatusStrategy.evaluateStatus(
						boardMocks[BoardType.NINE_BY_NINE].column[column],
						player,
					)
					expect(result.status).toBe(GameStatus.COMPLETED)
					expect(result.winner).toBe(player)
				}
			})

			it("detects win in all rows", () => {
				for (let row = 0; row < 9; row++) {
					const player = row % 2 === 0 ? PlayerSign.X : PlayerSign.O
					const result = ticTacToeStatusStrategy.evaluateStatus(
						boardMocks[BoardType.NINE_BY_NINE].row[row],
						player,
					)
					expect(result.status).toBe(GameStatus.COMPLETED)
					expect(result.winner).toBe(player)
				}
			})

			it("detects win in main diagonal", () => {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					boardMocks[BoardType.NINE_BY_NINE].mainDiagonal,
					PlayerSign.X,
				)
				expect(result.status).toBe(GameStatus.COMPLETED)
				expect(result.winner).toBe(PlayerSign.X)
			})

			it("detects win in anti diagonal", () => {
				const result = ticTacToeStatusStrategy.evaluateStatus(
					boardMocks[BoardType.NINE_BY_NINE].antiDiagonal,
					PlayerSign.O,
				)
				expect(result.status).toBe(GameStatus.COMPLETED)
				expect(result.winner).toBe(PlayerSign.O)
			})
		})
	})
})
