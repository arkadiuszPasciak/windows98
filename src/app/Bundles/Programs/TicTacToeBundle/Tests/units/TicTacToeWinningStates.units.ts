import { expect, it, describe } from 'vitest'
import { MTicTacToeWinningStates3x3 } from '@Bundles/TicTacToeBundle/Mocks/TicTacToeWinningStates.mocks'
import { TicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Services/TicTacToeWinningStates.services'
import { ETicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

const ticTacToeWinningStates3x3Service = Reflect.construct(
  TicTacToeWinningStates,
  [ETicTacToeRadioDimension.THREE_X_THREE],
) as any

describe('[TicTacToeBundle]<Services>(TicTacToeWinningStates)', () => {
  it('should return all winning states 3x3', async () => {
    expect(
      ticTacToeWinningStates3x3Service.getAllWinningStates(),
    ).toStrictEqual(MTicTacToeWinningStates3x3.ALL)
  })

  it('should return column winning states 3x3', async () => {
    expect(
      ticTacToeWinningStates3x3Service.getColumnsWinningStates(),
    ).toStrictEqual(MTicTacToeWinningStates3x3.COLUMNS)
  })

  it('should return diagonal winning states 3x3', async () => {
    expect(
      ticTacToeWinningStates3x3Service.getDiagonalsWinningStates(),
    ).toStrictEqual(MTicTacToeWinningStates3x3.DIAGONALS)
  })

  it('should return row winning states 3x3', async () => {
    expect(
      ticTacToeWinningStates3x3Service.getRowsWinningStates(),
    ).toStrictEqual(MTicTacToeWinningStates3x3.ROWS)
  })
})
