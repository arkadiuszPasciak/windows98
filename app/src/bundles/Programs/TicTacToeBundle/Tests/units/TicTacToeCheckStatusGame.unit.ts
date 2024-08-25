import { MTicTacToeCurrentBoard3x3 } from "@APP/src/bundles/Programs/TicTacToeBundle/Mocks/TicTacToeBoard.mocks"
import { MTicTacToeWinningStates3x3 } from "@APP/src/bundles/Programs/TicTacToeBundle/Mocks/TicTacToeWinningStates.mocks"
import { TicTacToeCheckStatusGame } from "@APP/src/bundles/Programs/TicTacToeBundle/Services/TicTacToeCheckStatusGame.services"
import { ETicTacToeStatusGame } from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports"
import { ETicTacToePlayerSign } from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToePlayers.supports"
import { describe, expect } from "vitest"

const ticTacToeCheckStatusGame3x3 = Reflect.construct(
	TicTacToeCheckStatusGame,
	[],
	// biome-ignore lint/suspicious/noExplicitAny: I need to refactor the whole tic tac toe bundle as micro app
) as any

describe("[TicTacToeBundle]<Services>(TicTacToeCheckStatusGame)", () => {
	test("method checkDraw", async () => {
		const drawFirst = ticTacToeCheckStatusGame3x3.checkDraw(
			MTicTacToeCurrentBoard3x3.DRAW_1,
		)

		expect(drawFirst).toBe(ETicTacToeStatusGame.DRAW)

		const drawSecond = ticTacToeCheckStatusGame3x3.checkDraw(
			MTicTacToeCurrentBoard3x3.DRAW_2,
		)

		expect(drawSecond).toBe(ETicTacToeStatusGame.DRAW)

		const nullFirst = ticTacToeCheckStatusGame3x3.checkDraw(
			MTicTacToeCurrentBoard3x3.ROW_1(ETicTacToePlayerSign.PLAYER_X),
		)

		expect(nullFirst).toBe(null)

		const nullSecond = ticTacToeCheckStatusGame3x3.checkDraw(
			MTicTacToeCurrentBoard3x3.COLUMN_1(ETicTacToePlayerSign.PLAYER_X),
		)

		expect(nullSecond).toBe(null)
	})

	test("method checkWinner", async () => {
		const winnerFirst = ticTacToeCheckStatusGame3x3.checkWinner(
			ETicTacToePlayerSign.PLAYER_X,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.ROW_1(ETicTacToePlayerSign.PLAYER_X),
		)

		expect(winnerFirst).toBe(ETicTacToeStatusGame.WINNER_X)

		const winnerSecond = ticTacToeCheckStatusGame3x3.checkWinner(
			ETicTacToePlayerSign.PLAYER_O,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.COLUMN_1(ETicTacToePlayerSign.PLAYER_O),
		)

		expect(winnerSecond).toBe(ETicTacToeStatusGame.WINNER_O)

		const nullFirst = ticTacToeCheckStatusGame3x3.checkWinner(
			ETicTacToePlayerSign.PLAYER_O,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.DRAW_1,
		)

		expect(nullFirst).toBe(null)

		const nullSecond = ticTacToeCheckStatusGame3x3.checkWinner(
			ETicTacToePlayerSign.PLAYER_O,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.DRAW_2,
		)

		expect(nullSecond).toBe(null)
	})

	test("method checkStatusGame", async () => {
		const columnFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_O,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.COLUMN_1(ETicTacToePlayerSign.PLAYER_O),
		)

		expect(columnFirst).toBe(ETicTacToeStatusGame.WINNER_O)

		const columnSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_X,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.COLUMN_2(ETicTacToePlayerSign.PLAYER_X),
		)

		expect(columnSecond).toBe(ETicTacToeStatusGame.WINNER_X)

		const columnThird = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_O,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.COLUMN_3(ETicTacToePlayerSign.PLAYER_O),
		)

		expect(columnThird).toBe(ETicTacToeStatusGame.WINNER_O)

		const diagonalFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_X,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.DIAGONAL_1(ETicTacToePlayerSign.PLAYER_X),
		)

		expect(diagonalFirst).toBe(ETicTacToeStatusGame.WINNER_X)

		const diagonalSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_O,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.DIAGONAL_2(ETicTacToePlayerSign.PLAYER_O),
		)

		expect(diagonalSecond).toBe(ETicTacToeStatusGame.WINNER_O)

		const drawFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_X,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.DRAW_1,
		)

		expect(drawFirst).toBe(ETicTacToeStatusGame.DRAW)

		const drawSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_O,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.DRAW_2,
		)

		expect(drawSecond).toBe(ETicTacToeStatusGame.DRAW)

		const rowFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_X,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.ROW_1(ETicTacToePlayerSign.PLAYER_X),
		)

		expect(rowFirst).toBe(ETicTacToeStatusGame.WINNER_X)

		const rowSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_O,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.ROW_2(ETicTacToePlayerSign.PLAYER_O),
		)

		expect(rowSecond).toBe(ETicTacToeStatusGame.WINNER_O)

		const rowThird = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_X,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.ROW_3(ETicTacToePlayerSign.PLAYER_X),
		)

		expect(rowThird).toBe(ETicTacToeStatusGame.WINNER_X)

		const noScoreFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_O,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.NO_SCORE_1,
		)

		expect(noScoreFirst).toBe(null)

		const noScoreSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
			ETicTacToePlayerSign.PLAYER_X,
			MTicTacToeWinningStates3x3.ALL,
			MTicTacToeCurrentBoard3x3.NO_SCORE_2,
		)

		expect(noScoreSecond).toBe(null)
	})
})
