import { CalculatorDomainContract } from '../contracts';
import { ECalculatorNumber, ECalculatorSymbol } from '../models';
export declare class CalculatorDomain implements CalculatorDomainContract {
    value: string;
    private calculatorService;
    constructor();
    addNumber: (number: ECalculatorNumber) => void;
    addDot: () => void;
    addSymbol: (symbol: ECalculatorSymbol) => void;
    summResult: () => void;
}
export declare const calculatorDomain: CalculatorDomain;
