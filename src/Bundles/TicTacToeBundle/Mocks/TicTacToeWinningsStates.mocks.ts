import { TicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Services/TicTacToeWinningsStates.services'
import { ETicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'
import { ITicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Supports/TicTacToeWinningsStates.supports'

const ticTacToeWinningStates3x3 = new TicTacToeWinningStates(
  ETicTacToeRadioDimension.THREE_X_THREE,
)

export const MTicTacToeWinningStates = {
  THREE_X_THREE: ticTacToeWinningStates3x3.winningStates,
} as ITicTacToeWinningStates
