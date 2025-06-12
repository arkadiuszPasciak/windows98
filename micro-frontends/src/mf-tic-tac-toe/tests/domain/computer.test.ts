import { beforeEach, describe, expect, it } from "vitest"
import { BoardType, PlayerSign } from "../../src/domain/models"
import { TicTacToeComputerService } from "../../src/domain/services"

describe("TicTacToeComputerService", () => {
	let ticTacToeComputerService: TicTacToeComputerService

	beforeEach(() => {
		ticTacToeComputerService = new TicTacToeComputerService()
	})

	it("should pick a random cell on an empty board", () => {
		const boardSize = BoardType.THREE_BY_THREE
		const emptyBoard = Array(boardSize * boardSize).fill("")
		const move = ticTacToeComputerService.determineNextMove(
			emptyBoard,
			boardSize,
			PlayerSign.X,
		)
		expect(move, "Should return a valid index").toBeGreaterThanOrEqual(0)
		expect(move, "Should return a valid index").toBeLessThan(
			boardSize * boardSize,
		)
	})

	it("should pick an adjacent cell if possible", () => {
		const boardSize = BoardType.THREE_BY_THREE

		const board = ["", "", "", "", PlayerSign.X, "", "", "", ""]
		const move = ticTacToeComputerService.determineNextMove(
			board,
			boardSize,
			PlayerSign.X,
		)

		const adjacentIndices = [1, 3, 5, 7]
		expect(adjacentIndices).toContain(move)
	})
})
