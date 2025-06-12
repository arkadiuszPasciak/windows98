import type {
	BoardCellIndex,
	BoardCells,
	BoardType,
	PlayerSign,
} from "../models"

export interface TicTacToeBoardServiceContract {
	generateBoard(boardType: BoardType): BoardCells
	chooseCell(
		boardCells: BoardCells,
		boardCellIndex: BoardCellIndex,
		playerSign: PlayerSign,
	): void
}
