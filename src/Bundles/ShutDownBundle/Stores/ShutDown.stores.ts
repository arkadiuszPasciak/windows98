import { defineStore } from 'pinia'

export const useShutDownStore = defineStore('shut-down', {
  state: () => ({
    modal: false as boolean,
  }),
  actions: {
    updateModal(status: boolean) {
      this.modal = status
    },
  },
})
