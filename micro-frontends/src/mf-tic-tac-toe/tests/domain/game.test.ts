import { describe, expect, it } from "vitest"
import { TicTacToeGameDomain } from "../../src/domain/domains"
import { BoardType, GameStatus, PlayerSign } from "../../src/domain/models"

const mocks = {
	computerSign: PlayerSign.O,
	boardType: BoardType.THREE_BY_THREE,
	humanSign: PlayerSign.X,
	humanName: "Wilhelm",
}

describe("TicTacToeGameDomain", () => {
	let ticTacToeGameDomain: TicTacToeGameDomain

	describe("should play a full game until win or draw", () => {
		ticTacToeGameDomain = new TicTacToeGameDomain()

		it("initGame()", () => {
			ticTacToeGameDomain.initGame(
				mocks.computerSign,
				mocks.boardType,
				mocks.humanSign,
				mocks.humanName,
			)

			expect(ticTacToeGameDomain.computer.sign).toBe(mocks.computerSign)
			expect(ticTacToeGameDomain.boardType).toBe(mocks.boardType)
			expect(ticTacToeGameDomain.human.sign).toBe(mocks.humanSign)
			expect(ticTacToeGameDomain.human.name).toBe(mocks.humanName)
			expect(ticTacToeGameDomain.boardCells.length).toBe(mocks.boardType)
			expect(ticTacToeGameDomain.statusResult.status).toBe(
				GameStatus.IN_PROGRESS,
			)
		})

		it("makeMove()", () => {
			ticTacToeGameDomain.initGame(
				mocks.computerSign,
				mocks.boardType,
				mocks.humanSign,
				mocks.humanName,
			)

			let moves = 0
			while (
				ticTacToeGameDomain.statusResult.status !== GameStatus.COMPLETED &&
				ticTacToeGameDomain.statusResult.status !== GameStatus.DRAW &&
				moves < 9
			) {
				const index = ticTacToeGameDomain.boardCells.indexOf("")
				if (index === -1) break
				ticTacToeGameDomain.makeMove(index)
				moves++
			}

			expect(
				[GameStatus.COMPLETED, GameStatus.DRAW].includes(
					ticTacToeGameDomain.statusResult.status,
				),
			).toBe(true)

			if (
				ticTacToeGameDomain.statusResult.status === GameStatus.COMPLETED &&
				ticTacToeGameDomain.statusResult.winner
			) {
				expect(
					[
						ticTacToeGameDomain.human.sign,
						ticTacToeGameDomain.computer.sign,
					].includes(ticTacToeGameDomain.statusResult.winner),
					"Winner should be X or O",
				).toBe(true)
			}

			if (ticTacToeGameDomain.statusResult.status === GameStatus.DRAW) {
				expect(
					ticTacToeGameDomain.statusResult.winner,
					"Winner should be undefined",
				).toBeUndefined()
			}
		})
	})
})
