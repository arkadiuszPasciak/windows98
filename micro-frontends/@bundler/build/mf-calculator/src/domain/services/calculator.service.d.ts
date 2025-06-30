import { CalculatorServiceContract } from '../contracts';
import { ECalculatorDirect } from '../models';
export declare class CalculatorService implements CalculatorServiceContract {
    isValueEqual(value: string, sign: string, direct: ECalculatorDirect): boolean;
    isDotExist(value: string): boolean;
    isMathematicalSignLast(value: string): boolean;
    summResult(value: string): string;
    isMathematicalOperation(value: string): boolean;
}
