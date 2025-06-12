import type { Maybe } from "@windows98/toolkit"
import type { BoardCells, PlayerSign } from "../models"

export interface TicTacToeComputerServiceContract {
	determineNextMove(
		boardCells: BoardCells,
		boardSize: number,
		computerSign: PlayerSign,
	): Maybe<number>
}
