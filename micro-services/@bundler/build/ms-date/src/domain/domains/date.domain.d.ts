import { CalendarRepository, DateRepository, TimeRepository } from "../../data/repositories";
import { MonthRepository } from "../../data/repositories/month.repository";
import { YearRepository } from "../../data/repositories/year.repository";
import type { DateDomainContract } from "../contracts";
import type { EMonth, ICalendar, IFormatOptions, TLocalesArgument } from "../models";
export declare class DateDomain implements DateDomainContract {
    private readonly calendarRepository;
    private readonly dateRepository;
    private readonly monthRepository;
    private readonly timeRepository;
    private readonly yearRepository;
    constructor(calendarRepository?: CalendarRepository, dateRepository?: DateRepository, monthRepository?: MonthRepository, timeRepository?: TimeRepository, yearRepository?: YearRepository);
    getCalendar(month: EMonth, year: number): ICalendar;
    getDate(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getDateWithTime(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getMonth(value?: string): EMonth;
    getTime(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getYear(value?: string): number;
}
