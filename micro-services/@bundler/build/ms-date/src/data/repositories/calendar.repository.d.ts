import type { CalendarRepositoryContract } from "../../domain/contracts";
import type { EMonth, ICalendar } from "../../domain/models";
import { DateStrategy } from "./strategies";
export declare class CalendarRepository implements CalendarRepositoryContract {
    private readonly dateStrategy;
    constructor(dateStrategy?: DateStrategy);
    get(month: EMonth, year: number): ICalendar;
    private getActiveDay;
    private getDaysInMonth;
    private getFirstDayOfWeek;
}
