import { defineStore } from 'pinia'
import { Calculator } from '@APP|Bundles/CalculatorBundle/Services/Calculator.services'
import {
  TCalculatorSign,
  TCalculatorNumber,
} from '@APP|Bundles/CalculatorBundle/Supports/Calculator.supports'

const CalculatorService = new Calculator()

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    value: '0' as string,
  }),
  actions: {
    addNumber(number: TCalculatorNumber) {
      if (
        CalculatorService.isValueEqual(this.value, '0', 'first') &&
        !CalculatorService.isValueEqual(this.value, '0.', 'first') &&
        this.value.length === 1
      ) {
        this.value = number
      } else {
        this.value += number
      }
    },
    addDot() {
      if (
        CalculatorService.isDotExist(this.value) ||
        CalculatorService.isMathematicalSignLast(this.value)
      ) {
        return
      }

      if (!CalculatorService.isValueEqual(this.value, '.', 'last')) {
        this.value += '.'
      }
    },
    addSign(sign: TCalculatorSign) {
      if (
        this.value === '0.' ||
        CalculatorService.isMathematicalSignLast(this.value)
      ) {
        return
      }

      this.value += sign
    },
    summResult() {
      this.value = CalculatorService.summingResult(this.value)
    },
  },
})
