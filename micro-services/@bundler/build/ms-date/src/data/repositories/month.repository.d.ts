import { MonthRepositoryContract } from '../../domain/contracts';
import { EMonth } from '../../domain/models';
import { DateStrategy } from './strategies';
export declare class MonthRepository implements MonthRepositoryContract {
    private readonly dateStrategy;
    constructor(dateStrategy?: DateStrategy);
    get(value?: string): EMonth;
}
