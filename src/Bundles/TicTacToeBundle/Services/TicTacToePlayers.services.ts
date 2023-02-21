import {
  ETicTacToeRadioPlayer,
  TTicTacToeRadioPlayer,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'
import {
  ETicTacToePlayerColor,
  ETicTacToePlayerType,
  ETicTacToePlayerSign,
  TTicTacToePlayerColor,
  TTicTacToePlayerType,
  TTicTacToePlayerSign,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

export function setSignByPlayerType(
  playerType: TTicTacToePlayerType,
  signType: TTicTacToeRadioPlayer,
): TTicTacToePlayerSign {
  if (playerType === ETicTacToePlayerType.COMPUTER) {
    if (signType === ETicTacToeRadioPlayer.PLAYER_X) {
      return ETicTacToePlayerSign.PLAYER_O
    } else {
      return ETicTacToePlayerSign.PLAYER_X
    }
  }

  if (playerType === ETicTacToePlayerType.USER) {
    if (signType === ETicTacToeRadioPlayer.PLAYER_O) {
      return ETicTacToePlayerSign.PLAYER_O
    } else {
      return ETicTacToePlayerSign.PLAYER_X
    }
  }

  return ETicTacToePlayerSign.PLAYER_O
}

export function setColorByPlayerType(
  playerType: TTicTacToePlayerSign,
): TTicTacToePlayerColor {
  switch (playerType) {
    case ETicTacToePlayerSign.PLAYER_X:
      return ETicTacToePlayerColor.RED
    case ETicTacToePlayerSign.PLAYER_O:
    default:
      return ETicTacToePlayerColor.BLUE
  }
}
