import type { DateRepositoryContract } from "../../domain/contracts";
import type { EDay, IFormatOptions, TLocalesArgument } from "../../domain/models";
import { DateStrategy } from "./strategies";
export declare class DateRepository implements DateRepositoryContract {
    private readonly dateStrategy;
    constructor(dateStrategy?: DateStrategy);
    getDate(value?: string): number;
    getDay(value?: string): EDay;
    toLocaleString(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    toLocaleDateString(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
}
