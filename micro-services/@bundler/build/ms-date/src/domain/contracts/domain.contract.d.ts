import { EMonth, ETimezone, ICalendar, IFormatOptions, TLocalesArgument } from '../models';
export interface DateDomainContract {
    getCalendar(month: EMonth, year: number): ICalendar;
    getDate(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getDateWithTime(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getMonth(value?: string): EMonth;
    getTime(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getTimezones(): Array<ETimezone>;
    getYear(value?: string): number;
}
