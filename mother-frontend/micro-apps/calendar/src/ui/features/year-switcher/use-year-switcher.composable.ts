import useCalendar from '../../composables/use-calendar.composable'

export default function useYearSwitcher() {
  const { calendarService } = useCalendar()

  const increaseYear = () => {
    calendarService.increaseYear()

    calendarService.changeCalendarByYear()
  }

  const decreaseYear = () => {
    calendarService.decreaseYear()

    calendarService.changeCalendarByYear()
  }

  const year = calendarService.year

  return {
    increaseYear,
    decreaseYear,
    year,
  }
}
