import CalendarService from '../../domain/services/calendar.service'

export default function useCalendar() {
  const calendarService = new CalendarService()

  return {
    calendarService,
  }
}
