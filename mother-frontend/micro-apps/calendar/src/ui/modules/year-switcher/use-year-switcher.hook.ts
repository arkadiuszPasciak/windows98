import useCalendar from '../../hooks/use-calendar.hook'

export default function useYearSwitcher() {
  const { calendarService } = useCalendar()

  const decreaseYear = (): void => {
    calendarService.decreaseYear()
  }

  const increaseYear = (): void => {
    calendarService.increaseYear()
  }

  return {
    decreaseYear,
    increaseYear,
    year: calendarService.year ?? 1900,
  }
}
