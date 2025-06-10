import type { TicTacToeBoardServiceContract } from "../contracts"
import type { BoardCells, FieldType, PlayerSign } from "../models"

export class TicTacToeBoardService implements TicTacToeBoardServiceContract {
	public generateBoard(fieldType: FieldType): BoardCells {
		return Array(fieldType).fill("")
	}

	public chooseCell(
		boardCells: BoardCells,
		boardField: number,
		playerSign: PlayerSign,
	): void {
		if (boardField < 0 || boardField >= boardCells.length) return

		if (boardCells[boardField] !== "") return

		boardCells[boardField] = playerSign
	}
}
