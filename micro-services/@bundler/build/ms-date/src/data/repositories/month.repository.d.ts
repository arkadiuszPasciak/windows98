import type { MonthRepositoryContract } from "../../domain/contracts";
import type { EMonth } from "../../domain/models";
import { DateStrategy } from "./strategies";
export declare class MonthRepository implements MonthRepositoryContract {
    private readonly dateStrategy;
    constructor(dateStrategy?: DateStrategy);
    get(value?: string): EMonth;
}
