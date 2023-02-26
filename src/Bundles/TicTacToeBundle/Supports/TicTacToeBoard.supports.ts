export interface ITicTacToeCurrentBoard3x3 {
  COLUMN_1: (player: string) => string[]
  COLUMN_2: (player: string) => string[]
  COLUMN_3: (player: string) => string[]
  DIAGONAL_1: (player: string) => string[]
  DIAGONAL_2: (player: string) => string[]
  DRAW_1: string[]
  DRAW_2: string[]
  ROW_1: (player: string) => string[]
  ROW_2: (player: string) => string[]
  ROW_3: (player: string) => string[]
  NO_SCORE_1: string[]
  NO_SCORE_2: string[]
}
