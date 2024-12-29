import type { EMonth, ICalendar } from "../models";
export interface CalendarRepositoryContract {
    get(month: EMonth, year: number): ICalendar;
}
