import { makeAutoObservable } from "mobx"
import type { CalculatorDomainContract } from "../contracts"
import {
	ECalculatorDirect,
	type ECalculatorNumber,
	type ECalculatorSymbol,
} from "../models"
import { CalculatorService } from "../services"

export class CalculatorDomain implements CalculatorDomainContract {
	public value = "0"
	private calculatorService: CalculatorService = new CalculatorService()

	constructor() {
		makeAutoObservable(this)
	}

	public addNumber = (number: ECalculatorNumber) => {
		if (
			this.calculatorService.isValueEqual(
				this.value,
				"0",
				ECalculatorDirect.FIRST,
			) &&
			!this.calculatorService.isValueEqual(
				this.value,
				"0.",
				ECalculatorDirect.FIRST,
			) &&
			this.value.length === 1
		) {
			this.value = String(number)
		} else {
			this.value += String(number)
		}
	}

	public addDot = () => {
		if (
			this.calculatorService.isDotExist(this.value) ||
			this.calculatorService.isMathematicalSignLast(this.value)
		) {
			return
		}

		if (
			!this.calculatorService.isValueEqual(
				this.value,
				".",
				ECalculatorDirect.LAST,
			)
		) {
			this.value += "."
		}
	}

	public addSymbol = (symbol: ECalculatorSymbol) => {
		if (
			this.value === "0." ||
			this.calculatorService.isMathematicalSignLast(this.value)
		) {
			return
		}

		this.value += symbol
	}

	public summResult = () => {
		this.value = this.calculatorService.summResult(this.value)
	}
}

export const calculatorDomain = new CalculatorDomain()
