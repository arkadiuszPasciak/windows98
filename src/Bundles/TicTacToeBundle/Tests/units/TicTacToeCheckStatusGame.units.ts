import { expect, it, describe } from 'vitest'
import { MTicTacToeCurrentBoard3x3 } from '@Bundles/TicTacToeBundle/Mocks/TicTacToeBoard.mocks'
import { MTicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Mocks/TicTacToeWinningStates.mocks'
import { TicTacToeCheckStatusGame } from '@Bundles/TicTacToeBundle/Services/TicTacToeCheckStatusGame.services'
import { ETicTacToeStatusGame } from '@Bundles/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports'
import { ETicTacToePlayerSign } from '@Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

const ticTacToeCheckStatusGame3x3 = new TicTacToeCheckStatusGame()

describe('[TicTacToeBundle]<Services>(TicTacToeCheckStatusGame)', () => {
  it('checks method checkStatusGame', async () => {
    const columnFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_O,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.COLUMN_1(ETicTacToePlayerSign.PLAYER_O),
    )

    expect(columnFirst).toBe(ETicTacToeStatusGame.WINNER_O)

    const columnSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_X,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.COLUMN_2(ETicTacToePlayerSign.PLAYER_X),
    )

    expect(columnSecond).toBe(ETicTacToeStatusGame.WINNER_X)

    const columnThird = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_O,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.COLUMN_3(ETicTacToePlayerSign.PLAYER_O),
    )

    expect(columnThird).toBe(ETicTacToeStatusGame.WINNER_O)

    const diagonalFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_X,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.DIAGONAL_1(ETicTacToePlayerSign.PLAYER_X),
    )

    expect(diagonalFirst).toBe(ETicTacToeStatusGame.WINNER_X)

    const diagonalSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_O,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.DIAGONAL_2(ETicTacToePlayerSign.PLAYER_O),
    )

    expect(diagonalSecond).toBe(ETicTacToeStatusGame.WINNER_O)

    const drawFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_X,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.DRAW_1,
    )

    expect(drawFirst).toBe(ETicTacToeStatusGame.DRAW)

    const drawSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_O,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.DRAW_2,
    )

    expect(drawSecond).toBe(ETicTacToeStatusGame.DRAW)

    const rowFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_X,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.ROW_1(ETicTacToePlayerSign.PLAYER_X),
    )

    expect(rowFirst).toBe(ETicTacToeStatusGame.WINNER_X)

    const rowSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_O,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.ROW_2(ETicTacToePlayerSign.PLAYER_O),
    )

    expect(rowSecond).toBe(ETicTacToeStatusGame.WINNER_O)

    const rowThird = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_X,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.ROW_3(ETicTacToePlayerSign.PLAYER_X),
    )

    expect(rowThird).toBe(ETicTacToeStatusGame.WINNER_X)

    const noScoreFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_O,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.NO_SCORE_1,
    )

    expect(noScoreFirst).toBe(null)

    const noScoreSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
      ETicTacToePlayerSign.PLAYER_X,
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.NO_SCORE_2,
    )

    expect(noScoreSecond).toBe(null)
  })
})
