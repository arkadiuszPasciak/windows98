import { CalendarRepository, DateRepository, MonthRepository, TimeRepository, TimezoneRepository, YearRepository } from "../../data/repositories";
import type { DateDomainContract } from "../contracts";
import type { EMonth, ICalendar, IFormatOptions, TLocalesArgument } from "../models";
export declare class DateDomain implements DateDomainContract {
    private readonly calendarRepository;
    private readonly dateRepository;
    private readonly monthRepository;
    private readonly timeRepository;
    private readonly timezoneRepository;
    private readonly yearRepository;
    constructor(calendarRepository?: CalendarRepository, dateRepository?: DateRepository, monthRepository?: MonthRepository, timeRepository?: TimeRepository, timezoneRepository?: TimezoneRepository, yearRepository?: YearRepository);
    getCalendar(month: EMonth, year: number): ICalendar;
    getDate(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getDateWithTime(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getMonth(value?: string): EMonth;
    getTime(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getTimezones(): Array<number>;
    getYear(value?: string): number;
}
