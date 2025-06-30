import { TicTacToeBoardStrategyContract } from '../contracts';
import { BoardCellIndex, BoardCells, BoardType, PlayerSign } from '../models';
export declare class TicTacToeBoardStrategy implements TicTacToeBoardStrategyContract {
    generateBoard(boardType: BoardType): BoardCells;
    chooseCell(boardCells: BoardCells, boardCellIndex: BoardCellIndex, playerSign: PlayerSign): void;
}
