import { beforeEach, describe, expect, it } from "vitest"
import { BoardType, PlayerSign } from "../../src/domain/models"
import { TicTacToeBoardStrategy } from "../../src/domain/strategies"

describe("TicTacToeBoardStrategy", () => {
	let ticTacToeBoardStrategy: TicTacToeBoardStrategy

	beforeEach(() => {
		ticTacToeBoardStrategy = new TicTacToeBoardStrategy()
	})

	it("generateBoard", () => {
		const board = ticTacToeBoardStrategy.generateBoard(BoardType.THREE_BY_THREE)

		expect(board, "Should generate board with correct length").toHaveLength(
			BoardType.THREE_BY_THREE,
		)
		expect(
			board.every((cell) => cell === ""),
			"All cells should be empty",
		).toBe(true)
	})

	describe("chooseCell", () => {
		it("fill the whole board", () => {
			const board = ticTacToeBoardStrategy.generateBoard(
				BoardType.THREE_BY_THREE,
			)
			for (let index = 0; index < board.length; index++) {
				const sign = index % 2 === 0 ? PlayerSign.X : PlayerSign.O
				ticTacToeBoardStrategy.chooseCell(board, index, sign)

				expect(board[index], `Cell ${index} should be set to ${sign}`).toBe(
					sign,
				)
			}
		})

		it("invalid index", () => {
			const board = ticTacToeBoardStrategy.generateBoard(
				BoardType.THREE_BY_THREE,
			)
			ticTacToeBoardStrategy.chooseCell(board, -1, PlayerSign.X)
			ticTacToeBoardStrategy.chooseCell(board, 9, PlayerSign.O)

			expect(
				board.every((cell) => cell === ""),
				"No cells should be set for invalid index",
			).toBe(true)
		})

		it("cell already filled", () => {
			const board = ticTacToeBoardStrategy.generateBoard(
				BoardType.THREE_BY_THREE,
			)
			ticTacToeBoardStrategy.chooseCell(board, 0, PlayerSign.X)
			ticTacToeBoardStrategy.chooseCell(board, 0, PlayerSign.O)

			expect(board[0], "Cell should not be overwritten").toBe(PlayerSign.X)
		})
	})
})
