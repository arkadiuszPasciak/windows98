import type { BoardCells, FieldType, PlayerSign } from "../models"

export interface TicTacToeBoardServiceContract {
	generateBoard(fieldType: FieldType): BoardCells
	chooseCell(
		boardCells: BoardCells,
		boardField: number,
		playerSign: PlayerSign,
	): void
}
