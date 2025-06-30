import { BoardCells, PlayerSign } from '../models';
import { GameStatusResult } from '../models/status.model';
export interface TicTacToeStatusStrategyContract {
    evaluateStatus(boardCells: BoardCells, player: PlayerSign): GameStatusResult;
}
