import { TicTacToeGameDomainContract } from '../contracts';
import { BoardCellIndex, BoardCells, BoardType, GameStatusResult, PlayerSign } from '../models';
export declare class TicTacToeGameDomain implements TicTacToeGameDomainContract {
    constructor();
    private readonly ticTacToeBoardStrategy;
    private readonly ticTacToeComputerStrategy;
    private readonly ticTacToeStatusStrategy;
    boardCells: BoardCells;
    currentPlayer: PlayerSign;
    computer: {
        sign: PlayerSign;
    };
    boardType: BoardType;
    human: {
        name: string;
        sign: PlayerSign;
    };
    statusResult: GameStatusResult;
    initGame(computerSign: PlayerSign, boardType: BoardType, humanSign: PlayerSign, humanName: string): void;
    makeMove(boardCellIndex: BoardCellIndex): void;
    private humanMove;
    private computerMove;
    private changeCurrentPlayer;
    private updateStatus;
    private isGameFinished;
}
export declare const ticTacToeGameDomain: TicTacToeGameDomain;
