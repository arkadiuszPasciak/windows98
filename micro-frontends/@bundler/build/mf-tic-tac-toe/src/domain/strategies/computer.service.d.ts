import { TicTacToeComputerStrategyContract } from '../contracts';
import { BoardCellIndex, BoardCells, BoardType, PlayerSign } from '../models';
export declare class TicTacToeComputerStrategy implements TicTacToeComputerStrategyContract {
    determineNextMove(boardCells: BoardCells, boardType: BoardType, computerSign: PlayerSign): BoardCellIndex;
    private findAdjacentEmptyCell;
    private findDiagonalEmptyCell;
    private findRandomEmptyCell;
}
