import type { YearRepositoryContract } from "../../domain/contracts";
import { DateStrategy } from "./strategies";
export declare class YearRepository implements YearRepositoryContract {
    private readonly dateStrategy;
    constructor(dateStrategy?: DateStrategy);
    get(value?: string): number;
}
