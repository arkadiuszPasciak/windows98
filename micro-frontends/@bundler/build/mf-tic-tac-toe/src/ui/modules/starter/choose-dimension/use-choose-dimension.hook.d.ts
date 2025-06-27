import { BoardType } from '../../../../domain/models';
export declare const useChooseDimension: () => {
    setBoardType: (type: BoardType) => void;
    selectedBoardType: BoardType;
    boardTypes: {
        content: BoardType;
        id: string;
        name: string;
    }[];
    translations: {
        label: string;
    };
};
