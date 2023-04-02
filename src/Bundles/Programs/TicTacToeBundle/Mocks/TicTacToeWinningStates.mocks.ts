import { ITicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Supports/TicTacToeWinningStates.supports'

export const MTicTacToeWinningStates3x3 = {
  ALL: [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  COLUMNS: [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ],
  DIAGONALS: [
    [1, 5, 9],
    [3, 5, 7],
  ],
  ROWS: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
} as ITicTacToeWinningStates
