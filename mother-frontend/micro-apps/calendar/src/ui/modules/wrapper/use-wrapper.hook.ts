import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import useCalendar from '../../composables/use-calendar.composable'

export function useWrapper() {
  const { t } = useTranslation()
  const { calendarService } = useCalendar()

  useEffect(() => {
    calendarService.generateCurrentCalendar();
  }, []);

  const dictionary = useMemo(
    () => ({
      title: t('CalendarBundle.title'),
    }),
    [t],
  )

  return {
    title: dictionary.title,
  }
}
