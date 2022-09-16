import { defineStore } from 'pinia'
import { getTimeClock } from '@Bundles/ClockBundle/Services/Clock.services'
import { Nullable } from 'vitest'

export const useClockStore = defineStore('clock', {
  state: () => ({
    time: '' as Nullable<string>,
  }),
  actions: {
    updateTime() {
      this.time = getTimeClock({
        timeStyle: 'short',
      })
    },
  },
})
