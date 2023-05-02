import { Nullable } from 'vitest'
import {
  ETicTacToeStatusGame,
  TTicTacToeCheckStatusGame,
  TTicTacToeStatusGameDraw,
  TTicTacToeStatusGameWinner,
} from '@APP|Bundles/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports'
import {
  ETicTacToePlayerSign,
  TTicTacToePlayerSign,
} from '@APP|Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

export class TicTacToeCheckStatusGame {
  public checkStatusGame(
    player: TTicTacToePlayerSign,
    winningStates: Array<number[]>,
    currentlyBoard: Array<string>,
  ): Nullable<TTicTacToeCheckStatusGame> {
    const checkWinner = this.checkWinner(player, winningStates, currentlyBoard)

    if (checkWinner) {
      return checkWinner
    }

    const checkDraw = this.checkDraw(currentlyBoard)

    if (checkDraw) {
      return checkDraw
    }

    return null
  }

  private checkDraw(
    currentlyBoard: Array<string>,
  ): Nullable<TTicTacToeStatusGameDraw> {
    const board = JSON.parse(JSON.stringify(currentlyBoard))

    const isDraw = board.every((state: string) => state !== '')

    if (isDraw) {
      return ETicTacToeStatusGame.DRAW
    } else {
      return null
    }
  }

  private checkWinner(
    player: TTicTacToePlayerSign,
    winningStates: Array<number[]>,
    currentlyBoard: Array<string>,
  ): Nullable<TTicTacToeStatusGameWinner> {
    for (const state of winningStates) {
      const [a, b, c] = state

      if (
        currentlyBoard[a - 1] === player &&
        currentlyBoard[b - 1] === player &&
        currentlyBoard[c - 1] === player
      ) {
        return player === ETicTacToePlayerSign.PLAYER_X
          ? ETicTacToeStatusGame.WINNER_X
          : ETicTacToeStatusGame.WINNER_O
      }
    }

    return null
  }
}
