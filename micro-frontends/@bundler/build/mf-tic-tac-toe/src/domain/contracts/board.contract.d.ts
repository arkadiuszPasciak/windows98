import { BoardCellIndex, BoardCells, BoardType, PlayerSign } from '../models';
export interface TicTacToeBoardStrategyContract {
    generateBoard(boardType: BoardType): BoardCells;
    chooseCell(boardCells: BoardCells, boardCellIndex: BoardCellIndex, playerSign: PlayerSign): void;
}
