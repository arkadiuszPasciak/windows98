import { beforeEach, describe, expect, it } from "vitest"
import { TicTacToeStarterDomain } from "../../src/domain/domains"
import { BoardType, PlayerSign } from "../../src/domain/models"

describe("TicTacToeStarterDomain", () => {
	let ticTacToeStarterDomain: TicTacToeStarterDomain

	beforeEach(() => {
		ticTacToeStarterDomain = new TicTacToeStarterDomain()
	})

	it("setBoardType", () => {
		const boardType = BoardType.THREE_BY_THREE
		ticTacToeStarterDomain.setBoardType(boardType)
		expect(
			ticTacToeStarterDomain.boardType,
			"Field type should be set correctly",
		).toBe(boardType)
	})

	it("setPlayerName", () => {
		const playerName = "Player 1"
		ticTacToeStarterDomain.setPlayerName(playerName)
		expect(
			ticTacToeStarterDomain.playerName,
			"Player name should be set correctly",
		).toBe(playerName)
	})

	it("setPlayerSign", () => {
		const playerSign = PlayerSign.O
		ticTacToeStarterDomain.setPlayerSign(playerSign)
		expect(
			ticTacToeStarterDomain.playerSign,
			"Player sign should be set correctly",
		).toBe(playerSign)
	})

	it("getGameData", () => {
		ticTacToeStarterDomain.setPlayerName("test player 123")
		const gameData = ticTacToeStarterDomain.getGameData()

		expect(gameData, "Game data should return the set values").toEqual({
			boardType: ticTacToeStarterDomain.boardType,
			playerName: ticTacToeStarterDomain.playerName,
			playerSign: ticTacToeStarterDomain.playerSign,
		})
	})
})
