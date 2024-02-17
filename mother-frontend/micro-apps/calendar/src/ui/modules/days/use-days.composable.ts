import { onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import useCalendar from '../../composables/use-calendar.composable'

export default function useDays() {
  const { t } = useI18n()
  const { calendarService } = useCalendar()

  const calendar = calendarService.calendar

  onBeforeMount(() => {
    calendarService.generateCurrentCalendar()
  })

  return {
    calendar,
    shortcutDays,
  }
}
