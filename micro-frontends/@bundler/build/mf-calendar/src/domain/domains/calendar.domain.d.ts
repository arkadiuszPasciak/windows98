import { MSDate } from '@windows98/micro-services';
import { Maybe } from '@windows98/toolkit';
import { CalendarDomainContract } from '../contracts';
export declare class CalendarDomain implements CalendarDomainContract {
    private readonly msDateDomain;
    activeDay: Maybe<number>;
    daysInMonth: number;
    firstDayOfWeek: number;
    currentYear: number;
    currentMonth: number;
    constructor(msDateDomain?: typeof MSDate);
    initCalendar: () => void;
    changeCalendarByYear: (year: number) => void;
    changeCalendarByMonth: (month: number) => void;
    decreaseYear: () => void;
    increaseYear: () => void;
    private generateCalendar;
}
export declare const calendarDomain: CalendarDomain;
