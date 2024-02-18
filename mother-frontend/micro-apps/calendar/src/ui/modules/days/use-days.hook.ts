import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import useCalendar from '../../hooks/use-calendar.hook'

export function useDays() {
  const { calendarService } = useCalendar()
  const { t } = useTranslation()

  const dictionary = useMemo(
    () => ({
      weekDays: [
        t('CalendarBundle.shortcut-sunday'),
        t('CalendarBundle.shortcut-monday'),
        t('CalendarBundle.shortcut-tuesday'),
        t('CalendarBundle.shortcut-wednesday'),
        t('CalendarBundle.shortcut-thursday'),
        t('CalendarBundle.shortcut-friday'),
        t('CalendarBundle.shortcut-saturday'),
      ],
    }),
    [t],
  )

  return {
    monthDays: calendarService.calendar,
    weekDays: dictionary.weekDays,
  }
}
