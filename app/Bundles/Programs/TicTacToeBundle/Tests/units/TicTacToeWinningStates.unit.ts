import { MTicTacToeWinningStates3x3 } from "@APP|Bundles/TicTacToeBundle/Mocks/TicTacToeWinningStates.mocks"
import { TicTacToeWinningStates } from "@APP|Bundles/TicTacToeBundle/Services/TicTacToeWinningStates.services"
import { ETicTacToeRadioDimension } from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import { describe, expect, it } from "vitest"

const ticTacToeWinningStates3x3Service = Reflect.construct(
	TicTacToeWinningStates,
	[ETicTacToeRadioDimension.THREE_X_THREE],
	// biome-ignore lint/suspicious/noExplicitAny: I need to refactor the whole tic tac toe bundle as micro app
) as any

describe("[TicTacToeBundle]<Services>(TicTacToeWinningStates)", () => {
	it("should return all winning states 3x3", async () => {
		expect(
			ticTacToeWinningStates3x3Service.getAllWinningStates(),
		).toStrictEqual(MTicTacToeWinningStates3x3.ALL)
	})

	it("should return column winning states 3x3", async () => {
		expect(
			ticTacToeWinningStates3x3Service.getColumnsWinningStates(),
		).toStrictEqual(MTicTacToeWinningStates3x3.COLUMNS)
	})

	it("should return diagonal winning states 3x3", async () => {
		expect(
			ticTacToeWinningStates3x3Service.getDiagonalsWinningStates(),
		).toStrictEqual(MTicTacToeWinningStates3x3.DIAGONALS)
	})

	it("should return row winning states 3x3", async () => {
		expect(
			ticTacToeWinningStates3x3Service.getRowsWinningStates(),
		).toStrictEqual(MTicTacToeWinningStates3x3.ROWS)
	})
})
