import { TicTacToeStarterDomainContract } from '../contracts';
import { BoardType, GameData, PlayerSign } from '../models';
export declare class TicTacToeStarterDomain implements TicTacToeStarterDomainContract {
    constructor();
    private readonly defaultData;
    boardType: BoardType;
    playerName: string;
    playerSign: PlayerSign;
    computerSign: PlayerSign;
    setBoardType(type: BoardType): void;
    setPlayerName(name: string): void;
    setPlayerSign(sign: PlayerSign): void;
    getGameData(): GameData;
    reset(): void;
}
export declare const ticTacToeStarterDomain: TicTacToeStarterDomain;
