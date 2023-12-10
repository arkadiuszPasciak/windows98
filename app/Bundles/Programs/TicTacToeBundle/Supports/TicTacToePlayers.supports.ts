export enum ETicTacToePlayerColor {
  BLUE = '#0000ff',
  RED = '#fe0000',
}

export enum ETicTacToePlayerType {
  COMPUTER = 'computer',
  USER = 'user',
}

export enum ETicTacToePlayerSign {
  PLAYER_O = 'o',
  PLAYER_X = 'x',
}

export type TTicTacToePlayerColor =
  | ETicTacToePlayerColor.BLUE
  | ETicTacToePlayerColor.RED

export type TTicTacToePlayerType =
  | ETicTacToePlayerType.COMPUTER
  | ETicTacToePlayerType.USER

export type TTicTacToePlayerSign =
  | ETicTacToePlayerSign.PLAYER_O
  | ETicTacToePlayerSign.PLAYER_X
