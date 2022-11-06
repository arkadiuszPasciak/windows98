import { defineStore } from 'pinia'
import {
  isDotExist,
  isValueEqual,
  isMathematicalSignLast,
  summingResult,
} from '@Bundles/CalculatorBundle/Services/Calculator.services'
import {
  TMathematicalSign,
  TCalculatorNumber,
} from '@Bundles/CalculatorBundle/Supports/Calculator.supports'

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    modal: true as boolean,
    value: '0' as string,
  }),
  actions: {
    updateModal(status: boolean) {
      this.modal = status
    },
    addNumber(number: TCalculatorNumber) {
      if (
        isValueEqual(this.value, '0', 'first') &&
        !isValueEqual(this.value, '0.', 'first') &&
        this.value.length === 1
      ) {
        this.value = number
      } else {
        this.value += number
      }
    },
    addDot() {
      if (isDotExist(this.value) || isMathematicalSignLast(this.value)) {
        return
      }

      if (!isValueEqual(this.value, '.', 'last')) {
        this.value += '.'
      }
    },
    addSign(sign: TMathematicalSign) {
      if (this.value === '0.' || isMathematicalSignLast(this.value)) {
        return
      }

      this.value += sign
    },
    summResult() {
      this.value = summingResult(this.value)
    },
  },
})
