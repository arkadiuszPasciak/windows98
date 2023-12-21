import useCalendar from '../../composables/use-calendar.composable'

export default function useMonthSwitcher() {
	const { calendarService } = useCalendar()

	const changeCalendarByMonth = (value: number) => {
		calendarService.changeCalendarByMonth(value)
	}

	const selectMonths = [
		{
		  value: 0,
		  name: 'CalendarBundle.january',
		},
		{
		  value: 1,
		  name: 'CalendarBundle.february',
		},
		{
		  value: 2,
		  name: 'CalendarBundle.march',
		},
		{
		  value: 3,
		  name: 'CalendarBundle.april',
		},
		{
		  value: 4,
		  name: 'CalendarBundle.may',
		},
		{
		  value: 5,
		  name: 'CalendarBundle.june',
		},
		{
		  value: 6,
		  name: 'CalendarBundle.july',
		},
		{
		  value: 7,
		  name: 'CalendarBundle.august',
		},
		{
		  value: 8,
		  name: 'CalendarBundle.september',
		},
		{
		  value: 9,
		  name: 'CalendarBundle.october',
		},
		{
		  value: 10,
		  name: 'CalendarBundle.november',
		},
		{
		  value: 11,
		  name: 'CalendarBundle.december',
		},
	]

	const month = calendarService.month

	return {
		changeCalendarByMonth,
		month,
		selectMonths
	}
}
