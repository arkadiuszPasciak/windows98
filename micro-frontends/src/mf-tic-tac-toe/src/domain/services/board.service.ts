import type { TicTacToeBoardServiceContract } from "../contracts"
import type {
	BoardCellIndex,
	BoardCells,
	BoardType,
	PlayerSign,
} from "../models"

export class TicTacToeBoardService implements TicTacToeBoardServiceContract {
	public generateBoard(boardType: BoardType): BoardCells {
		return Array(boardType).fill("")
	}

	public chooseCell(
		boardCells: BoardCells,
		boardCellIndex: BoardCellIndex,
		playerSign: PlayerSign,
	): void {
		if (boardCellIndex < 0 || boardCellIndex >= boardCells.length) return

		if (boardCells[boardCellIndex] !== "") return

		boardCells[boardCellIndex] = playerSign
	}
}
