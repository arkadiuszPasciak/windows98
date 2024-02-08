import { onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import useCalendar from '../../composables/use-calendar.composable'

export default function useWrapper() {
  const { t } = useI18n()
  const { calendarService } = useCalendar()

  const initCalendar = () => {
    onBeforeMount(() => {
      calendarService.generateCurrentCalendar()
    })
  }

  const translation = {
    title: t('CalendarBundle.title'),
  }

  return {
    initCalendar,
    translation,
  }
}
