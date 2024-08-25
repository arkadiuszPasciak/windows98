import { TicTacToeScore } from "@APP/src/bundles/Programs/TicTacToeBundle/Services/TicTacToeScore.services"
import { ETicTacToeStatusGame } from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports"
import { ETicTacToeRadioPlayer } from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import { describe, expect, it } from "vitest"

const { getDescriptionByScoreResult } = new TicTacToeScore()

describe("[TicTacToeBundle]<Services>(TicTacToeScore)", () => {
	it("checks method getDescriptionByScoreResult", async () => {
		const translate = (text: string) => {
			return text
		}

		const draw = getDescriptionByScoreResult(
			translate,
			ETicTacToeStatusGame.DRAW,
			"Arkadiusz",
			ETicTacToeRadioPlayer.PLAYER_O,
		)

		expect(draw).toBe("TicTacToeBundle.draw")

		const winnerO = getDescriptionByScoreResult(
			translate,
			ETicTacToeStatusGame.WINNER_O,
			"Arkadiusz",
			ETicTacToeRadioPlayer.PLAYER_O,
		)

		expect(winnerO).toBe("TicTacToeBundle.player-has-won")

		const winnerX = getDescriptionByScoreResult(
			translate,
			ETicTacToeStatusGame.WINNER_X,
			"Arkadiusz",
			ETicTacToeRadioPlayer.PLAYER_X,
		)

		expect(winnerX).toBe("TicTacToeBundle.player-has-won")

		const undefinedScore = getDescriptionByScoreResult(
			translate,
			// @ts-ignore
			"undefined",
			"Arkadiusz",
			ETicTacToeRadioPlayer.PLAYER_O,
		)

		expect(undefinedScore).toBe("TicTacToeBundle.score-undefined")
	})
})
