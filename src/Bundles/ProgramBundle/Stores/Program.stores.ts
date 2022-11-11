import { defineStore } from 'pinia'

export const useProgramStore = defineStore('program', {
  state: () => ({
    modalCalculator: false as boolean,
    modalNotepad: false as boolean,
    modalShutDown: false as boolean,
  }),
  actions: {
    updateCalculatorModal(status: boolean): void {
      this.modalCalculator = status
    },
    updateNotepadModal(status: boolean): void {
      this.modalNotepad = status
    },
    updateShutDownModal(status: boolean): void {
      this.modalShutDown = status
    },
  },
})
