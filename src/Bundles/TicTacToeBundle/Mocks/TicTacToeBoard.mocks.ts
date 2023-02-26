import { ITicTacToeCurrentBoard3x3 } from '@Bundles/TicTacToeBundle/Supports/TicTacToeBoard.supports'

export const MTicTacToeCurrentBoard3x3 = {
  COLUMN_1: (player) => [player, '', '', player, '', '', player, '', ''],
  COLUMN_2: (player) => ['', player, '', '', player, '', '', player, ''],
  COLUMN_3: (player) => ['', '', player, '', '', player, '', '', player],
  DIAGONAL_1: (player) => [player, '', '', '', player, '', '', '', player],
  DIAGONAL_2: (player) => ['', '', player, '', player, '', player, '', ''],
  DRAW_1: ['x', 'o', 'o', 'o', 'x', 'x', 'o', 'x', 'o'],
  DRAW_2: ['x', 'o', 'o', 'o', 'o', 'x', 'x', 'x', 'o'],
  ROW_1: (player) => [player, player, player, '', '', '', '', '', ''],
  ROW_2: (player) => ['', '', '', player, player, player, '', '', ''],
  ROW_3: (player) => ['', '', '', '', '', '', player, player, player],
  NO_SCORE_1: ['', '', '', '', '', '', '', '', ''],
  NO_SCORE_2: ['x', '', '', '', 'x', '', '', '', 'o'],
} as ITicTacToeCurrentBoard3x3
