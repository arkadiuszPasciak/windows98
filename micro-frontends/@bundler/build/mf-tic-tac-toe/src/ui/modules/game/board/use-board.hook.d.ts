export declare function useBoard(): {
    boardCells: import('../../../../domain/models').BoardCells;
    boardType: import('../../../../domain/models').BoardType;
    handleCellClick: (index: number) => void;
    isGameFinished: boolean;
};
