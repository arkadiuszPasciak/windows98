import type { BoardCells, PlayerSign } from "../models"
import type { GameStatusResult } from "../models/status.model"

export interface TicTacToeStatusStrategyContract {
	evaluateStatus(boardCells: BoardCells, player: PlayerSign): GameStatusResult
}
