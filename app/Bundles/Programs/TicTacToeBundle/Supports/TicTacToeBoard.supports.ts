import type { TTicTacToePlayerSign } from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports"

export interface ITicTacToeCurrentBoard3x3 {
	COLUMN_1: (player: TTicTacToePlayerSign) => Array<string>
	COLUMN_2: (player: TTicTacToePlayerSign) => Array<string>
	COLUMN_3: (player: TTicTacToePlayerSign) => Array<string>
	DIAGONAL_1: (player: TTicTacToePlayerSign) => Array<string>
	DIAGONAL_2: (player: TTicTacToePlayerSign) => Array<string>
	DRAW_1: Array<string>
	DRAW_2: Array<string>
	ROW_1: (player: TTicTacToePlayerSign) => Array<string>
	ROW_2: (player: TTicTacToePlayerSign) => Array<string>
	ROW_3: (player: TTicTacToePlayerSign) => Array<string>
	NO_SCORE_1: Array<string>
	NO_SCORE_2: Array<string>
}

export interface ITicTacToeLengthOfBoard {
	THREE_X_THREE: Array<string>
	SIX_X_SIX: Array<string>
	NINE_X_NINE: Array<string>
}
