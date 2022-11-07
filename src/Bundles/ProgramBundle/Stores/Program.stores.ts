import { defineStore } from 'pinia'

export const useProgramStore = defineStore('program', {
  state: () => ({
    modalShutDown: false as boolean,
    modalCalculator: false as boolean,
  }),
  actions: {
    updateShutDownModal(status: boolean): void {
      this.modalShutDown = status
    },
    updateCalculatorModal(status: boolean): void {
      this.modalCalculator = status
    },
  },
})
