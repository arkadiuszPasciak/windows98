import { MSMathematics } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { CalculatorDomainContract } from "../contracts"
import type { ErrorType, Numbers, Operation, Sign } from "../models"

export class CalculatorDomain implements CalculatorDomainContract {
	public currentOperation: Operation = ""
	private mathematicsService: typeof MSMathematics = MSMathematics

	constructor() {
		makeAutoObservable(this)
	}

	public add(value: Numbers | Sign) {
		this.currentOperation = this.mathematicsService.add(
			this.currentOperation,
			value,
		)
	}

	public clear() {
		this.currentOperation = this.mathematicsService.clear()
	}

	public equal() {
		this.currentOperation = this.mathematicsService.equal(this.currentOperation)
	}

	public remove() {
		this.currentOperation = this.mathematicsService.remove(
			this.currentOperation,
		)
	}

	public validate(): true | ErrorType {
		const validationResult = this.mathematicsService.validate(
			this.currentOperation,
		)

		if (validationResult !== true) return validationResult

		return true
	}
}

export const calculatorDomain = new CalculatorDomain()
