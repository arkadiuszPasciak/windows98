import { defineStore } from 'pinia'
import { Calendar } from '@Bundles/CalendarBundle/Services/Calendar.services'
import {
  EYearChangeMethod,
  TYearChangeMethod,
} from '@Bundles/CalendarBundle/Supports/Calendar.supports'

export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    calendar: null as null | any,
    year: null as null | number,
    month: null as null | number,
  }),

  actions: {
    generateCurrentCalendar(date: Date): void {
      const calendar = new Calendar(date)
      const days = calendar.generateDays()

      if (this.calendar !== days) {
        this.calendar = days
      }

      if (this.year !== calendar.year) {
        this.year = calendar.year
      }

      if (this.month !== calendar.month) {
        this.month = calendar.month
      }
    },

    changeCalendarByMonth(month: number): void {
      if (!this.year) {
        return
      }

      const date = new Date(this.year, month)

      this.generateCurrentCalendar(date)
    },

    changeCalendarByYear(): void {
      if ((!this.month && this.month !== 0) || !this.year) {
        return
      }

      const date = new Date(this.year, this.month)

      this.generateCurrentCalendar(date)
    },

    changeNumberOfYear(method: TYearChangeMethod) {
      if (!this.year || !method) {
        return
      }

      if (method === EYearChangeMethod.INCREASE) {
        this.year += 1
      }

      if (method === EYearChangeMethod.DECREASE) {
        this.year -= 1
      }
    },
  },
})
