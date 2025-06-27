import { BoardCellIndex, BoardCells, BoardType, PlayerSign } from '../models';
export interface TicTacToeComputerStrategyContract {
    determineNextMove(boardCells: BoardCells, boardType: BoardType, computerSign: PlayerSign): BoardCellIndex;
}
