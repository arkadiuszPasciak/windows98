import type {
	IUIStepperStoresActions,
	IUIStepperStoresState,
} from "@APP/src/bundles/UI/UIStepperBundle/Supports/UIStepperTesting.supports"
import { defineStore } from "pinia"

export const useUIStepperTestingStore = defineStore("ui-stepper-testing", {
	state: () =>
		({
			value: 0,
		}) as IUIStepperStoresState,
	actions: {
		increaseValue() {
			this.value += 1
		},
		decreaseValue() {
			this.value -= 1
		},
	} as IUIStepperStoresActions,
})
