import { VueI18nTranslation } from "vue-i18n"
import {
	ETicTacToeStatusGame,
	TTicTacToeCheckStatusGame,
} from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports"
import {
	ETicTacToeRadioPlayer,
	TTicTacToeRadioPlayer,
} from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports"

export class TicTacToeScore {
	public getDescriptionByScoreResult(
		t: VueI18nTranslation,
		score: TTicTacToeCheckStatusGame,
		playerName: string,
		playerType: TTicTacToeRadioPlayer,
	): string {
		switch (score) {
		case ETicTacToeStatusGame.DRAW:
			return t("TicTacToeBundle.draw")
		case ETicTacToeStatusGame.WINNER_O:
			return t("TicTacToeBundle.player-has-won", {
				name:
						playerType === ETicTacToeRadioPlayer.PLAYER_O
							? playerName
							: "Computer",
			})
		case ETicTacToeStatusGame.WINNER_X:
			return t("TicTacToeBundle.player-has-won", {
				name:
						playerType === ETicTacToeRadioPlayer.PLAYER_X
							? playerName
							: "Computer",
			})
		default:
			return t("TicTacToeBundle.score-undefined")
		}
	}
}
