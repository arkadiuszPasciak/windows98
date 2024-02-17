import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export function useWeekDays() {
  const { t } = useTranslation()

  const dictionary = useMemo<Array<string>>(
    () => [
      t('CalendarBundle.shortcut-sunday'),
      t('CalendarBundle.shortcut-monday'),
      t('CalendarBundle.shortcut-tuesday'),
      t('CalendarBundle.shortcut-wednesday'),
      t('CalendarBundle.shortcut-thursday'),
      t('CalendarBundle.shortcut-friday'),
      t('CalendarBundle.shortcut-saturday'),
    ],
    [t],
  )

  return {
    dictionary,
  }
}
