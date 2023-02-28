import { expect, it, describe } from 'vitest'
import { TicTacToePlayers } from '@Bundles/TicTacToeBundle/Services/TicTacToePlayers.services'
import { ETicTacToeRadioPlayer } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'
import {
  ETicTacToePlayerColor,
  ETicTacToePlayerType,
  ETicTacToePlayerSign,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

const ticTacToePlayersService = new TicTacToePlayers()

describe('[TicTacToeBundle]<Services>(TicTacToePlayers)', () => {
  it('checks method setSignByPlayerType', async () => {
    const computerPlayerO = expect(
      ticTacToePlayersService.setSignByPlayerType(
        ETicTacToePlayerType.COMPUTER,
        ETicTacToeRadioPlayer.PLAYER_O,
      ),
    )

    computerPlayerO.toBe(ETicTacToePlayerSign.PLAYER_X)

    const computerPlayerX = expect(
      ticTacToePlayersService.setSignByPlayerType(
        ETicTacToePlayerType.COMPUTER,
        ETicTacToeRadioPlayer.PLAYER_X,
      ),
    )

    computerPlayerX.toBe(ETicTacToePlayerSign.PLAYER_O)

    const userPlayerO = expect(
      ticTacToePlayersService.setSignByPlayerType(
        ETicTacToePlayerType.USER,
        ETicTacToeRadioPlayer.PLAYER_O,
      ),
    )

    userPlayerO.toBe(ETicTacToePlayerSign.PLAYER_O)

    const userPlayerX = expect(
      ticTacToePlayersService.setSignByPlayerType(
        ETicTacToePlayerType.USER,
        ETicTacToeRadioPlayer.PLAYER_X,
      ),
    )

    userPlayerX.toBe(ETicTacToePlayerSign.PLAYER_X)
  })

  it('checks method setSignByPlayerType', async () => {
    const playerX = expect(
      ticTacToePlayersService.setColorByPlayerType(
        ETicTacToePlayerSign.PLAYER_X,
      ),
    )

    playerX.toBe(ETicTacToePlayerColor.RED)

    const playerO = expect(
      ticTacToePlayersService.setColorByPlayerType(
        ETicTacToePlayerSign.PLAYER_O,
      ),
    )

    playerO.toBe(ETicTacToePlayerColor.BLUE)
  })
})
