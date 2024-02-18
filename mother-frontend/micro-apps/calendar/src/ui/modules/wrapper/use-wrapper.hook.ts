import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import useCalendar from '../../hooks/use-calendar.hook'

export function useWrapper() {
  const { t } = useTranslation()
  const { calendarService } = useCalendar()

  useEffect(() => {
    calendarService.generateCurrentCalendar();
  }, []);

  const dictionary = useMemo(
    () => ({
      title: t('calendar.wrapper.title'),
    }),
    [t],
  )

  return {
    title: dictionary.title,
  }
}
