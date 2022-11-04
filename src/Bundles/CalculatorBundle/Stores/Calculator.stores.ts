import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    modal: true as boolean,
  }),
  actions: {
    updateModal(status: boolean) {
      this.modal = status
    },
  },
})
