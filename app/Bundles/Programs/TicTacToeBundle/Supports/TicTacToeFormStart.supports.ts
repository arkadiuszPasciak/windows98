export enum ETicTacToeInputNames {
	CHOOSE_DIMENSION = "tic-tac-toc-choose-dimension",
	CHOOSE_PLAYER = "tic-tac-toc-choose-player",
	ENTER_YOUR_NAME = "tic-tac-toe-enter-your-name",
}

export enum ETicTacToeRadioDimension {
	THREE_X_THREE = "3x3",
	SIX_X_SIX = "6x6",
	NINE_X_NINE = "9x9",
}

export enum ETicTacToeRadioPlayer {
	PLAYER_X = "player-x",
	PLAYER_O = "player-o",
}

export enum ETicTacToeValidationError {
	DIMENSION_TYPE_UNDEFINED = "error.dimension-type.undefined",
	USER_NAME_EMPTY = "error.user-name.empty",
	USER_NAME_TOO_LONG = "error.user-name.too-long",
	PLAYER_TYPE_UNDEFINED = "error.player-type.undefined",
}

export enum ETicTacToeValidateStatusType {
	SUCCESS = "SUCCESS",
	ERROR = "ERROR",
}

export enum ETicTacToeValidationSuccess {
	FIELDS_ARE_OKAY = "success.fields-are-okay",
}

export interface ITicTacToeValidateFields {
	userName: string
	playerType: ETicTacToeRadioPlayer
	dimensionType: ETicTacToeRadioDimension
}

export interface ITicTacToeValidateStatus {
	type: TTicTacToeValidateStatusType
	code: TTicTacToeValidationSuccess | TTicTacToeValidationError
	fields: ITicTacToeValidateFields | null
}

export type TTicTacToeValidationError =
	| ETicTacToeValidationError.DIMENSION_TYPE_UNDEFINED
	| ETicTacToeValidationError.USER_NAME_EMPTY
	| ETicTacToeValidationError.USER_NAME_TOO_LONG
	| ETicTacToeValidationError.PLAYER_TYPE_UNDEFINED

export type TTicTacToeValidateStatusType =
	| ETicTacToeValidateStatusType.SUCCESS
	| ETicTacToeValidateStatusType.ERROR

export type TTicTacToeValidationSuccess =
	ETicTacToeValidationSuccess.FIELDS_ARE_OKAY

export type TTicTacToeRadioDimension =
	| ETicTacToeRadioDimension.THREE_X_THREE
	| ETicTacToeRadioDimension.SIX_X_SIX
	| ETicTacToeRadioDimension.NINE_X_NINE

export type TTicTacToeRadioPlayer =
	| ETicTacToeRadioPlayer.PLAYER_X
	| ETicTacToeRadioPlayer.PLAYER_O
