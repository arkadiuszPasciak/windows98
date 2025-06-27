import { UseStartGame } from './start-game.type';
export declare const useStartGame: ({ onClick }: UseStartGame) => {
    startGame: () => void;
    translations: {
        button: string;
    };
    isButtonDisabled: boolean;
};
