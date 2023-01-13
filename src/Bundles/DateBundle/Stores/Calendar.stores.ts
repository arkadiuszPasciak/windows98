import { defineStore } from 'pinia'
import { Calendar } from '@Bundles/DateBundle/Services/Date.services'

export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    calendar: null as null | any,
    year: null as null | number,
    month: null as null | number,
  }),
  actions: {
    generateCurrentCalendar(date: Date) {
      const calendar = new Calendar(date)

      this.calendar = calendar.generateDays()
      this.year = calendar.year
      this.month = calendar.month
    },
  },
})
