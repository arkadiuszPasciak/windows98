import { defineStore } from "pinia"
import { Calculator } from "@APP|Bundles/CalculatorBundle/Services/Calculator.services"
import { ECalculatorDirect } from "@APP|Bundles/CalculatorBundle/Supports/Calculator.supports"
import {
	ICalculatorStoresActions,
	ICalculatorStoresState,
} from "@APP|Bundles/CalculatorBundle/Supports/CalculatorStores.supports"

const CalculatorService = new Calculator()

export const useCalculatorStore = defineStore("calculator", {
	state: () =>
		({
			value: "0",
		} as ICalculatorStoresState),
	actions: {
		addNumber(number) {
			if (
				CalculatorService.isValueEqual(
					this.value,
					"0",
					ECalculatorDirect.FIRST,
				) &&
				!CalculatorService.isValueEqual(
					this.value,
					"0.",
					ECalculatorDirect.FIRST,
				) &&
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

			if (
				!CalculatorService.isValueEqual(this.value, ".", ECalculatorDirect.LAST)
			) {
				this.value += "."
			}
		},
		addSign(sign) {
			if (
				this.value === "0." ||
				CalculatorService.isMathematicalSignLast(this.value)
			) {
				return
			}

			this.value += sign
		},
		summResult() {
			this.value = CalculatorService.summingResult(this.value)
		},
	} as ICalculatorStoresActions,
})
