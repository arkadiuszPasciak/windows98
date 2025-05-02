import { Maybe } from '@windows98/toolkit';
import { EDay } from './day.model';
export interface ICalendar {
    activeDay: Maybe<number>;
    daysInMonth: number;
    firstDayOfWeek: EDay;
}
