import { expect, it, describe } from 'vitest'
import { MTicTacToeCurrentBoard3x3 } from '@Bundles/TicTacToeBundle/Mocks/TicTacToeBoard.mocks'
import { MTicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Mocks/TicTacToeWinningsStates.mocks'
import { TicTacToeCheckStatusGame } from '@Bundles/TicTacToeBundle/Services/TicTacToeCheckStatusGame.services'
import { ETicTacToeStatusGame } from '@Bundles/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports'

const ticTacToeCheckStatusGame3x3 = new TicTacToeCheckStatusGame()

describe('[TicTacToeBundle]<Services>(TicTacToeCheckStatusGame)', () => {
  it('checks method checkStatusGame', async () => {
    const columnFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'o',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.COLUMN_1('o'),
    )

    expect(columnFirst).toBe(ETicTacToeStatusGame.WINNER_O)

    const columnSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'x',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.COLUMN_2('x'),
    )

    expect(columnSecond).toBe(ETicTacToeStatusGame.WINNER_X)

    const columnThird = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'o',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.COLUMN_3('o'),
    )

    expect(columnThird).toBe(ETicTacToeStatusGame.WINNER_O)

    const diagonalFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'x',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.DIAGONAL_1('x'),
    )

    expect(diagonalFirst).toBe(ETicTacToeStatusGame.WINNER_X)

    const diagonalSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'o',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.DIAGONAL_2('o'),
    )

    expect(diagonalSecond).toBe(ETicTacToeStatusGame.WINNER_O)

    const drawFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'x',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.DRAW_1,
    )

    expect(drawFirst).toBe(ETicTacToeStatusGame.DRAW)

    const drawSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'o',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.DRAW_2,
    )

    expect(drawSecond).toBe(ETicTacToeStatusGame.DRAW)

    const rowFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'x',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.ROW_1('x'),
    )

    expect(rowFirst).toBe(ETicTacToeStatusGame.WINNER_X)

    const rowSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'o',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.ROW_2('o'),
    )

    expect(rowSecond).toBe(ETicTacToeStatusGame.WINNER_O)

    const rowThird = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'x',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.ROW_3('x'),
    )

    expect(rowThird).toBe(ETicTacToeStatusGame.WINNER_X)

    const noScoreFirst = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'o',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.NO_SCORE_1,
    )

    expect(noScoreFirst).toBe(null)

    const noScoreSecond = ticTacToeCheckStatusGame3x3.checkStatusGame(
      'x',
      MTicTacToeWinningStates.THREE_X_THREE,
      MTicTacToeCurrentBoard3x3.NO_SCORE_2,
    )

    expect(noScoreSecond).toBe(null)
  })
})
