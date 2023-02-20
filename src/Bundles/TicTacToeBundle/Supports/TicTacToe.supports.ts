export enum ETicTacToeRadioDimension {
  THREE_X_THREE = '3x3',
  SIX_X_SIX = '6x6',
  NINE_X_NINE = '9x9',
}

export enum ETicTacToeRadioPlayer {
  PLAYER_X = 'player-x',
  PLAYER_O = 'player-o',
}

export enum ETicTacToeValidationError {
  DIMENSION_TYPE_UNDEFINED = 'error.dimension-type.undefined',
  USER_NAME_EMPTY = 'error.user-name.empty',
  USER_NAME_TOO_LONG = 'error.user-name.too-long',
  PLAYER_TYPE_UNDEFINED = 'error.player-type.undefined',
}

export interface ITicTacToeFieldsValues {
  playerNameValue: string
  choosePlayerValue: TTicTacToeRadioPlayer
  chooseDimensionValue: TTicTacToeRadioDimension
}

export type TTicTacToeRadioDimension =
  | ETicTacToeRadioDimension.THREE_X_THREE
  | ETicTacToeRadioDimension.SIX_X_SIX
  | ETicTacToeRadioDimension.NINE_X_NINE

export type TTicTacToeRadioPlayer =
  | ETicTacToeRadioPlayer.PLAYER_X
  | ETicTacToeRadioPlayer.PLAYER_O
