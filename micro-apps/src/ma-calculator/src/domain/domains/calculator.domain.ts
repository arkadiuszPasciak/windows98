import {
	observable,
	action,
	makeAutoObservable,
} from "mobx"
import {
	CalculatorService,
} from "../services"
import {
	ECalculatorDirect,
	ECalculatorNumber,
	ECalculatorSymbol,
} from "../models"
import CalculatorDomainContract from "../contracts/domain.contract"

export class CalculatorDomain implements CalculatorDomainContract {
	@observable value = "0"
	private calculatorService = new CalculatorService()

	constructor() {
		makeAutoObservable(this)
	}

	@action addNumber(number: ECalculatorNumber) {
		if (
			this.calculatorService.isValueEqual(this.value, "0", ECalculatorDirect.FIRST) &&
			!this.calculatorService.isValueEqual(this.value, "0.", ECalculatorDirect.FIRST) &&
			this.value.length === 1
		) {
			this.value = String(number)
		} else {
			this.value += String(number)
		}
	}

	@action addDot() {
		if (
			this.calculatorService.isDotExist(this.value) ||
			this.calculatorService.isMathematicalSignLast(this.value)
		) {
			return
		}

		if (!this.calculatorService.isValueEqual(this.value, ".", ECalculatorDirect.LAST)) {
			this.value += "."
		}
	}

	@action addSymbol(symbol: ECalculatorSymbol) {
		if (
			this.value === "0." ||
			this.calculatorService.isMathematicalSignLast(this.value)
		) {
			return
		}

		this.value += symbol
	}

	@action summResult() {
		this.value = this.calculatorService.summResult(this.value)
	}
}

export const calculatorDomain = new CalculatorDomain()
