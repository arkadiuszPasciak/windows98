import type {
	BoardCellIndex,
	BoardCells,
	BoardType,
	PlayerSign,
} from "../models"

export interface TicTacToeComputerServiceContract {
	determineNextMove(
		boardCells: BoardCells,
		boardType: BoardType,
		computerSign: PlayerSign,
	): BoardCellIndex
}
