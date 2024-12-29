import type { TimeRepositoryContract } from "../../domain/contracts";
import type { IFormatOptions, TLocalesArgument } from "../../domain/models";
import { DateStrategy } from "./strategies";
export declare class TimeRepository implements TimeRepositoryContract {
    private readonly dateStrategy;
    constructor(dateStrategy?: DateStrategy);
    getHours(value?: string): number;
    getMilliseconds(value?: string): number;
    getMinutes(value?: string): number;
    getSeconds(value?: string): number;
    toLocaleTimeString(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
}
