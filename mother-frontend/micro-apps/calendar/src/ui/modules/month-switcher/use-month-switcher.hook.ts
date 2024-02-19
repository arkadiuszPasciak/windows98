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
          name: t('calendar.month-switcher.january'),
        },
        {
          value: 1,
          name: t('calendar.month-switcher.february'),
        },
        {
          value: 2,
          name: t('calendar.month-switcher.march'),
        },
        {
          value: 3,
          name: t('calendar.month-switcher.april'),
        },
        {
          value: 4,
          name: t('calendar.month-switcher.may'),
        },
        {
          value: 5,
          name: t('calendar.month-switcher.june'),
        },
        {
          value: 6,
          name: t('calendar.month-switcher.july'),
        },
        {
          value: 7,
          name: t('calendar.month-switcher.august'),
        },
        {
          value: 8,
          name: t('calendar.month-switcher.september'),
        },
        {
          value: 9,
          name: t('calendar.month-switcher.october'),
        },
        {
          value: 10,
          name: t('calendar.month-switcher.november'),
        },
        {
          value: 11,
          name: t('calendar.month-switcher.december'),
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
