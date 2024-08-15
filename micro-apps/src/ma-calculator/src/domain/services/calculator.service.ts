import type { CalculatorServiceContract } from "../contracts"
import { ECalculatorDirect, ECalculatorSymbol } from "../models"

export class CalculatorService implements CalculatorServiceContract {
	public isValueEqual(
		value: string,
		sign: string,
		direct: ECalculatorDirect,
	): boolean {
		switch (direct) {
			case ECalculatorDirect.FIRST:
				return value.slice(0, sign.length) === sign
			case ECalculatorDirect.LAST:
				return value.slice(-1) === sign
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

		return !!result
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

		// biome-ignore lint/security/noGlobalEval: I am not proud of that but It is temporary
		return String(eval(value))
	}

	public isMathematicalOperation(value: string): boolean {
		if (!value) {
			return false
		}

		const regex = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/

		return !!regex.test(value)
	}
}
