import { defineStore } from 'pinia'
import { Calendar } from '@Bundles/DateBundle/Services/Date.services'

export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    calendar: null as null | any,
    year: null as null | number,
    month: null as null | number,
  }),
  actions: {
    generateCurrentCalendar(date: Date): void {
      const calendar = new Calendar(date)

      this.calendar = calendar.generateDays()

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
  },
})
