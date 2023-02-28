import { expect, it, describe } from 'vitest'
import { MTicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Mocks/TicTacToeWinningStates.mocks'
import { TicTacToeWinningStates } from '@/Bundles/TicTacToeBundle/Services/TicTacToeWinningStates.services'
import { ETicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

const ticTacToeWinningStates3x3Service = new TicTacToeWinningStates(
  ETicTacToeRadioDimension.THREE_X_THREE,
)

describe('[TicTacToeBundle]<Services>(TicTacToeWinningStates)', () => {
  it('should return winning states 3x3', async () => {
    const winningStates = ticTacToeWinningStates3x3Service.winningStates

    expect(winningStates).toStrictEqual(MTicTacToeWinningStates.THREE_X_THREE)
  })
})
