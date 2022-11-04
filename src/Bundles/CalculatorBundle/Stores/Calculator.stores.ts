import { defineStore } from 'pinia'
import { isValueEqual } from '@Bundles/CalculatorBundle/Services/Calculator.services'

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
      if (
        isValueEqual(this.value, '0', 'first') &&
        !isValueEqual(this.value, '0.', 'first')
      ) {
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
