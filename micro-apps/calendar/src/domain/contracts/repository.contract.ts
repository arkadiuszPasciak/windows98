import { ICalendarDays } from '../models/days.model';

export default interface CalendarRepositoryContract {
	getFullYear(): number;
	getMonth(): number;
	generateDays(): Array<ICalendarDays>;
	getFirstDayMonth(): number;
	getLastDateMonth(): number;
}
