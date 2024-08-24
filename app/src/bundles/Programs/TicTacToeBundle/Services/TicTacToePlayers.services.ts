import {
	ETicTacToeRadioPlayer,
	type TTicTacToeRadioPlayer,
} from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import {
	ETicTacToePlayerColor,
	ETicTacToePlayerSign,
	ETicTacToePlayerType,
	type TTicTacToePlayerColor,
	type TTicTacToePlayerSign,
	type TTicTacToePlayerType,
} from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToePlayers.supports"

export class TicTacToePlayers {
	public setColorByPlayerType(
		playerType: TTicTacToePlayerSign,
	): TTicTacToePlayerColor {
		switch (playerType) {
			case ETicTacToePlayerSign.PLAYER_X:
				return ETicTacToePlayerColor.RED
			default:
				return ETicTacToePlayerColor.BLUE
		}
	}

	public setSignByPlayerType(
		playerType: TTicTacToePlayerType,
		signType: TTicTacToeRadioPlayer,
	): TTicTacToePlayerSign {
		if (playerType === ETicTacToePlayerType.COMPUTER) {
			if (signType === ETicTacToeRadioPlayer.PLAYER_X) {
				return ETicTacToePlayerSign.PLAYER_O
			}
			return ETicTacToePlayerSign.PLAYER_X
		}

		if (playerType === ETicTacToePlayerType.USER) {
			if (signType === ETicTacToeRadioPlayer.PLAYER_O) {
				return ETicTacToePlayerSign.PLAYER_O
			}
			return ETicTacToePlayerSign.PLAYER_X
		}

		return ETicTacToePlayerSign.PLAYER_O
	}
}
