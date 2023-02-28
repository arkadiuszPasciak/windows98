import { TTicTacToePlayerSign } from '@Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

export interface ITicTacToeCurrentBoard3x3 {
  COLUMN_1: (player: TTicTacToePlayerSign) => string[]
  COLUMN_2: (player: TTicTacToePlayerSign) => string[]
  COLUMN_3: (player: TTicTacToePlayerSign) => string[]
  DIAGONAL_1: (player: TTicTacToePlayerSign) => string[]
  DIAGONAL_2: (player: TTicTacToePlayerSign) => string[]
  DRAW_1: string[]
  DRAW_2: string[]
  ROW_1: (player: TTicTacToePlayerSign) => string[]
  ROW_2: (player: TTicTacToePlayerSign) => string[]
  ROW_3: (player: TTicTacToePlayerSign) => string[]
  NO_SCORE_1: string[]
  NO_SCORE_2: string[]
}

export interface ITicTacToeLengthOfBoard {
  THREE_X_THREE: Array<string>
  SIX_X_SIX: Array<string>
  NINE_X_NINE: Array<string>
}
