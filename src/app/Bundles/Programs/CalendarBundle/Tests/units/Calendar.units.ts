import { expect, it, describe } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import {
  MCalendarDays,
  MCalendarDays2,
  MCalendarDays3,
} from '@APP|Bundles/CalendarBundle/Mocks/Calendar.mocks'
import { useCalendarStore } from '@APP|Bundles/CalendarBundle/Stores/Calendar.stores'
import { ECalendarYearChangeMethod } from '@APP|Bundles/CalendarBundle/Supports/Calendar.supports'

setActivePinia(createPinia())
const store = useCalendarStore()

describe('[CalendarBundle]<Stores>(useCalendarStore)', () => {
  it('generates calendar', async () => {
    await store.generateCurrentCalendar(new Date(2022, 0))

    expect(store.calendar).toStrictEqual(MCalendarDays)
    expect(store.month).toBe(0)
    expect(store.year).toBe(2022)
  })

  it('changes calendar by month', async () => {
    await store.changeCalendarByMonth(5)

    expect(store.calendar).toStrictEqual(MCalendarDays2)
    expect(store.month).toBe(5)
    expect(store.year).toBe(2022)
  })

  it('changes calendar by year', async () => {
    store.year = 1980
    await store.changeCalendarByYear()

    expect(store.calendar).toStrictEqual(MCalendarDays3)
    expect(store.month).toBe(5)
    expect(store.year).toBe(1980)
  })

  it('changes year by number', () => {
    store.year = 2000

    store.changeNumberOfYear(ECalendarYearChangeMethod.INCREASE)

    expect(store.year).toBe(2001)

    store.changeNumberOfYear(ECalendarYearChangeMethod.DECREASE)

    expect(store.year).toBe(2000)
  })
})
