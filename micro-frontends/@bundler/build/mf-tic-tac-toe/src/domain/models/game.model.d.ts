import { BoardType } from './board.model';
import { PlayerSign } from './player.model';
export interface GameData {
    boardType: BoardType;
    playerName: string;
    playerSign: PlayerSign;
    computerSign: PlayerSign;
}
