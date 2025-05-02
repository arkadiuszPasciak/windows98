import { EDay, IFormatOptions, TLocalesArgument } from '../models';
export interface DateRepositoryContract {
    getDate(value?: string): number;
    getDay(value?: string): EDay;
    toLocaleString(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    toLocaleDateString(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
}
