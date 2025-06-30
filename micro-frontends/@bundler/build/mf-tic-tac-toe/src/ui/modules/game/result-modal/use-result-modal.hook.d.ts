import { GameStatus } from '../../../../domain/models';
export declare function useResultModal(): {
    isGameFinished: boolean;
    translations: {
        button: {
            text: string;
        };
        modal: {
            title: string;
        };
        result: {
            draw: string;
            playerHasWon: string;
        };
    };
    result: GameStatus;
};
