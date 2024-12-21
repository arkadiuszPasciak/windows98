import type { DateRepositoryContract } from "../../domain/contracts";
import type { EDay, EMonth, IFormatOptions, TLocalesArgument } from "../../domain/models";
export declare class DateRepository implements DateRepositoryContract {
    getDate(value?: string): number;
    getDay(value?: string): EDay;
    getFullYear(value?: string): number;
    getHours(value?: string): number;
    getMilliseconds(value?: string): number;
    getMinutes(value?: string): number;
    getMonth(value?: string): EMonth;
    getSeconds(value?: string): number;
    toLocaleString(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    toLocaleDateString(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    toLocaleTimeString(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    private createDate;
    private isValidDate;
}
