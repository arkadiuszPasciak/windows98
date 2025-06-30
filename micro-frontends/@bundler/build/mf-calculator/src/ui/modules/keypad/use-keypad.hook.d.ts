export declare function useKeypad(): {
    addDot: () => void;
    addNumber: (number: import('../../../domain/models').ECalculatorNumber) => void;
    addSymbol: (symbol: import('../../../domain/models').ECalculatorSymbol) => void;
    summResult: () => void;
};
