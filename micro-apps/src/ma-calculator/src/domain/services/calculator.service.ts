import { CalculatorServiceContract } from "../contracts"
import {
	ECalculatorSymbol,
	ECalculatorDirect,
} from "../models"

export class CalculatorService implements CalculatorServiceContract {
	public isValueEqual(
		value: string,
		sign: string,
		direct: ECalculatorDirect,
	): boolean {
		switch (direct) {
		case ECalculatorDirect.FIRST:
			return value.slice(0, sign.length) === sign ? true : false
		case ECalculatorDirect.LAST:
			return value.slice(-1) === sign ? true : false
		default:
			return false
		}
	}

	public isDotExist(value: string): boolean {
		if (!value) {
			return false
		}

		const array = value.split("")
		const result = array.find((element) => element === ".")

		return result ? true : false
	}

	public isMathematicalSignLast(value: string): boolean {
		if (!value) {
			return false
		}

		const lastValue = value.slice(-1)

		switch (lastValue) {
		case ECalculatorSymbol.ADD:
		case ECalculatorSymbol.DIVIDE:
		case ECalculatorSymbol.MINUS:
		case ECalculatorSymbol.MULTIPLY:
			return true
		default:
			return false
		}
	}

	public summResult(value: string): string {
		if (!value) {
			return "ERROR"
		}

		if (!this.isMathematicalOperation(value)) {
			return "ERROR"
		}

		return String(eval(value))
	}

	public isMathematicalOperation(value: string): boolean {
		if (!value) {
			return false
		}

		const regex = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/

		return regex.test(value) ? true : false
	}
}
