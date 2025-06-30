import { TicTacToeStatusStrategyContract } from '../contracts';
import { BoardCells, GameStatusResult, PlayerSign } from '../models';
export declare class TicTacToeStatusStrategy implements TicTacToeStatusStrategyContract {
    evaluateStatus(boardCells: BoardCells, player: PlayerSign): GameStatusResult;
    private checkAntiDiagonal;
    private checkColumns;
    private checkDraw;
    private checkMainDiagonal;
    private checkRows;
    private isBoardSquare;
    private getBoardSize;
}
