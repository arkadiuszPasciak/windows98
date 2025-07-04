import { PlayerSign } from './player.model';
export declare enum GameStatus {
    COMPLETED = "completed",
    DRAW = "draw",
    ERROR = "error",
    IN_PROGRESS = "in_progress",
    NOT_STARTED = "not_started"
}
export interface GameStatusResult {
    status: GameStatus;
    winner: PlayerSign | undefined;
}
