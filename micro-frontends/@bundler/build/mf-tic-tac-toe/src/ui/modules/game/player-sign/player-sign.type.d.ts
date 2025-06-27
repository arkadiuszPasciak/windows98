import { PlayerSign } from '../../../../domain/models';
export declare enum PlayerSignType {
    COMPUTER = "computer",
    HUMAN = "human"
}
export interface PlayerSignProps {
    signType: PlayerSign;
    playerType: PlayerSignType;
    playerName?: string;
}
export type UsePlayerSign = Pick<PlayerSignProps, "playerType" | "playerName">;
