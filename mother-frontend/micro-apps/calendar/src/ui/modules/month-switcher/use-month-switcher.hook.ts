import { useState } from 'react'
import { DSSelectOption } from '@windows98/design-system'
import { ReactEventHandler } from 'react'

const selectMonths: Array<DSSelectOption> = [
  {
    value: 0,
    name: 'CalendarBundle.january',
  },
  {
    value: 1,
    name: 'CalendarBundle.february',
  },
  {
    value: 2,
    name: 'CalendarBundle.march',
  },
  {
    value: 3,
    name: 'CalendarBundle.april',
  },
  {
    value: 4,
    name: 'CalendarBundle.may',
  },
  {
    value: 5,
    name: 'CalendarBundle.june',
  },
  {
    value: 6,
    name: 'CalendarBundle.july',
  },
  {
    value: 7,
    name: 'CalendarBundle.august',
  },
  {
    value: 8,
    name: 'CalendarBundle.september',
  },
  {
    value: 9,
    name: 'CalendarBundle.october',
  },
  {
    value: 10,
    name: 'CalendarBundle.november',
  },
  {
    value: 11,
    name: 'CalendarBundle.december',
  },
]

export default function useMonthSwitcher() {
  const [month, setMonth] = useState<number | string>(selectMonths[0].value)

  const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
    const selectedValue = event.currentTarget.value
    setMonth(selectedValue)
  }

  return {
    handleSelectChange,
    month,
    selectMonths,
  }
}
