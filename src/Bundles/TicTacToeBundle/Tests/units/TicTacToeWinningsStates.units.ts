import { expect, it, describe } from 'vitest'
import { ETicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'
import { MTicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Mocks/TicTacToeWinningsStates.mocks'
import { TicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Services/TicTacToeWinningsStates.services'

const ticTacToeWinningStates3x3Service = new TicTacToeWinningStates(
  ETicTacToeRadioDimension.THREE_X_THREE,
)

describe('[TicTacToeBundle]<Services>(TicTacToeWinningStates)', () => {
  it('should return winning states 3x3', async () => {
    const winningStates = ticTacToeWinningStates3x3Service.winningStates

    expect(winningStates).toStrictEqual(MTicTacToeWinningStates.THREE_X_THREE)
  })
})
