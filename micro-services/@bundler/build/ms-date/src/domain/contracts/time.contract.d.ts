import { IFormatOptions, TLocalesArgument } from '../models';
export interface TimeRepositoryContract {
    getHours(value?: string): number;
    getMilliseconds(value?: string): number;
    getMinutes(value?: string): number;
    getSeconds(value?: string): number;
    toLocaleTimeString(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
}
