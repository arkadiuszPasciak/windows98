import { defineStore } from 'pinia'

export const useProgramStore = defineStore('program', {
  state: () => ({
    modalCalculator: false as boolean,
    modalDocumentation: false as boolean,
    modalMediaPlayer: false as boolean,
    modalNotepad: false as boolean,
    modalRun: false as boolean,
    modalSettings: false as boolean,
    modalShutDown: false as boolean,
    modalTicTacToe: false as boolean,
    modalTimer: false as boolean,
  }),
  actions: {
    updateCalculatorModal(status: boolean): void {
      this.modalCalculator = status
    },
    updateDocumentationModal(status: boolean): void {
      this.modalDocumentation = status
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
    updateTicTacToeModal(status: boolean): void {
      this.modalTicTacToe = status
    },
    updateTimerModal(status: boolean): void {
      this.modalTimer = status
    },
  },
})
