import { defineStore } from 'pinia'

export const useProgramStore = defineStore('program', {
  state: () => ({
    modalCalculator: false as boolean,
    modalNotepad: false as boolean,
    modalRun: false as boolean,
    modalSettings: false as boolean,
    modalShutDown: false as boolean,
  }),
  actions: {
    updateCalculatorModal(status: boolean): void {
      this.modalCalculator = status
    },
    updateNotepadModal(status: boolean): void {
      this.modalNotepad = status
    },
    updateRunModal(status: boolean): void {
      this.modalRun = status
    },
    updateSettingsModal(status: boolean): void {
      this.modalSettings = status
    },
    updateShutDownModal(status: boolean): void {
      this.modalShutDown = status
    },
  },
})
