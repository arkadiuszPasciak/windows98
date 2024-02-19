import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import useCalendar from '../../hooks/use-calendar.hook'

export function useDays() {
  const { calendarService } = useCalendar()
  const { t } = useTranslation()

  const dictionary = useMemo(
    () => ({
      weekDays: [
        t('calendar.days.sunday'),
        t('calendar.days.monday'),
        t('calendar.days.tuesday'),
        t('calendar.days.wednesday'),
        t('calendar.days.thursday'),
        t('calendar.days.friday'),
        t('calendar.days.saturday'),
      ],
    }),
    [t],
  )

  return {
    monthDays: calendarService.calendar,
    weekDays: dictionary.weekDays,
  }
}
