import { defineStore } from 'pinia'
import {
  IUIStepperStoresActions,
  IUIStepperStoresState,
} from '@APP|Bundles/UIStepperBundle/Supports/UIStepperTesting.supports'

export const useUIStepperTestingStore = defineStore('ui-stepper-testing', {
  state: () =>
    ({
      value: 0,
    } as IUIStepperStoresState),
  actions: {
    increaseValue() {
      this.value += 1
    },
    decreaseValue() {
      this.value -= 1
    },
  } as IUIStepperStoresActions,
})
