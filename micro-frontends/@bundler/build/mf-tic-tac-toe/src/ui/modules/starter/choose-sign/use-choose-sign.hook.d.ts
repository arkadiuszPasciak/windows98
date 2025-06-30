import { PlayerSign } from '../../../../domain/models';
export declare const useChooseSign: () => {
    setPlayerSign: (sign: PlayerSign) => void;
    selectedPlayerSign: PlayerSign;
    playerSigns: {
        content: PlayerSign;
        id: string;
    }[];
    translations: {
        label: string;
    };
};
