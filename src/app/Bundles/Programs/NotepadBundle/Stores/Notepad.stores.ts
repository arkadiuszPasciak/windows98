import { defineStore } from 'pinia'

export const useNotepadStore = defineStore('notepad', {
  state: () => ({
    modalSave: false as boolean,
  }),
  actions: {
    updateSaveModal(status: boolean): void {
      this.modalSave = status
    },
  },
})
