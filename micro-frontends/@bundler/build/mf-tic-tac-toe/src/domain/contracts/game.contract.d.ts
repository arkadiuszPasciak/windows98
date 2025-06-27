import { BoardCellIndex, BoardCells, BoardType, GameStatusResult, PlayerSign } from '../models';
export interface TicTacToeGameDomainContract {
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
}
