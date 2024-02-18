import { useMemo, type ReactEventHandler } from 'react'
import useCalendar from '../../hooks/use-calendar.hook'
import { useTranslation } from 'react-i18next'

export default function useMonthSwitcher() {
  const { t } = useTranslation()
  const { calendarService } = useCalendar()

  const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
    calendarService.changeCalendarByMonth(Number(event.currentTarget.value))
  }

  const dictionary = useMemo(
    () => ({
      months: [
        {
          value: 0,
          name: t('CalendarBundle.january'),
        },
        {
          value: 1,
          name: t('CalendarBundle.february'),
        },
        {
          value: 2,
          name: t('CalendarBundle.march'),
        },
        {
          value: 3,
          name: t('CalendarBundle.april'),
        },
        {
          value: 4,
          name: t('CalendarBundle.may'),
        },
        {
          value: 5,
          name: t('CalendarBundle.june'),
        },
        {
          value: 6,
          name: t('CalendarBundle.july'),
        },
        {
          value: 7,
          name: t('CalendarBundle.august'),
        },
        {
          value: 8,
          name: t('CalendarBundle.september'),
        },
        {
          value: 9,
          name: t('CalendarBundle.october'),
        },
        {
          value: 10,
          name: t('CalendarBundle.november'),
        },
        {
          value: 11,
          name: t('CalendarBundle.december'),
        },
      ]
    }),
    [t],
  )

  return {
    handleSelectChange,
    month: calendarService.month ?? dictionary.months[0].value,
    months: dictionary.months,
  }
}
