import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    modal: false as boolean,
  }),
  actions: {
    updateModal(status: boolean) {
      this.modal = status
    },
  },
})
