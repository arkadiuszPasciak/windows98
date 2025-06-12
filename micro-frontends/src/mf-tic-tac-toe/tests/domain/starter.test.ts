import { beforeEach, describe, expect, it } from "vitest"
import { TicTacToeStarterDomain } from "../../src/domain/domains"
import { FieldType, PlayerSign } from "../../src/domain/models"

describe("TicTacToeStarterDomain", () => {
	let ticTacToeStarterDomain: TicTacToeStarterDomain

	beforeEach(() => {
		ticTacToeStarterDomain = new TicTacToeStarterDomain()
	})

	it("setFieldType", () => {
		const fieldType = FieldType.THREE_BY_THREE
		ticTacToeStarterDomain.setFieldType(fieldType)
		expect(
			ticTacToeStarterDomain.fieldType,
			"Field type should be set correctly",
		).toBe(fieldType)
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
			fieldType: ticTacToeStarterDomain.fieldType,
			playerName: ticTacToeStarterDomain.playerName,
			playerSign: ticTacToeStarterDomain.playerSign,
		})
	})
})
