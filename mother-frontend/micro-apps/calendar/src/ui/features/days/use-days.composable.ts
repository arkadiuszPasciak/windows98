import { onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import useCalendar from '../../composables/use-calendar.composable'

export default function useDays() {
  const { t } = useI18n()
  const { calendarService } = useCalendar()

  const calendar = calendarService.calendar

  const shortcutDays: Array<string> = [
    t('CalendarBundle.shortcut-sunday'),
    t('CalendarBundle.shortcut-monday'),
    t('CalendarBundle.shortcut-tuesday'),
    t('CalendarBundle.shortcut-wednesday'),
    t('CalendarBundle.shortcut-thursday'),
    t('CalendarBundle.shortcut-friday'),
    t('CalendarBundle.shortcut-saturday'),
  ]

  onBeforeMount(() => {
    calendarService.generateCurrentCalendar()
  })

  return {
    calendar,
    shortcutDays,
  }
}
