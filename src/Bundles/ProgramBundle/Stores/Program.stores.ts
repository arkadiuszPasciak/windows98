import { defineStore } from 'pinia'

export const useProgramStore = defineStore('program', {
  state: () => ({
    modalCalculator: false as boolean,
    modalMediaPlayer: false as boolean,
    modalNotepad: false as boolean,
    modalRun: false as boolean,
    // TODO change to false before merge to master
    modalSettings: true as boolean,
    modalShutDown: false as boolean,
  }),
  actions: {
    updateCalculatorModal(status: boolean): void {
      this.modalCalculator = status
    },
    updateMediaPlayerModal(status: boolean): void {
      this.modalMediaPlayer = status
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
