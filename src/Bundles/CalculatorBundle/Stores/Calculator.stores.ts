import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    modal: true as boolean,
    value: '0' as string,
  }),
  actions: {
    updateModal(status: boolean) {
      this.modal = status
    },
    addNumber(number: string) {
      if (this.value.slice(0, 1) === '0' && this.value.slice(0, 2) !== '0.') {
        this.value = number
      } else {
        this.value += number
      }
    },
    addDot() {
      if (this.value.slice(-1) !== '.') {
        this.value += '.'
      } else {
        // if dot is exist in value return false
      }
    },
  },
})
