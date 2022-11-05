import { defineStore } from 'pinia'
import { Nullable } from 'vitest'
import {
  isDotExist,
  isValueEqual,
} from '@Bundles/CalculatorBundle/Services/Calculator.services'
import { TMathematicalSign } from '@Bundles/CalculatorBundle/Supports/Calculator.supports'

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    modal: true as boolean,
    value: '0' as string,
    firstPartOfValue: '' as string,
    secondPartOfValue: '' as string,
    sign: null as Nullable<TMathematicalSign>,
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
      if (isDotExist(this.value)) {
        return
      }

      if (!isValueEqual(this.value, '.', 'last')) {
        this.value += '.'
      }
    },
    addSign(sign: TMathematicalSign) {
      if (this.value === '0' || this.value === '0.') {
        return
      }

      this.sign = sign
    },
  },
})
