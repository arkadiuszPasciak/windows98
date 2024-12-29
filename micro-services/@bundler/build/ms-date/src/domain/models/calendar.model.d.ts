import type { Maybe } from "@windows98/toolkit";
import type { EDay } from "./day.model";
export interface ICalendar {
    activeDay: Maybe<number>;
    daysInMonth: number;
    firstDayOfWeek: EDay;
}
