import type { ValidatorStrategyContract } from "../../contracts"
import type { ErrorType, Numbers, Operation, Sign } from "../../models"

export class ValidatorStrategy implements ValidatorStrategyContract {
	private allowedNumbers: Numbers[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	private allowedSigns: Sign[] = ["+", "-", "*", "/", "=", "."]

	public validate(currentOperation: Operation): ErrorType | true {
		if (!this.verifyNotEmpty(currentOperation)) return "empty_operation"
		if (!this.verifyNumbers(currentOperation)) return "invalid_character"
		if (!this.verifyNoConsecutiveDots(currentOperation))
			return "invalid_character"
		if (!this.verifySigns(currentOperation)) return "consecutive_operators"
		if (!this.verifyLeadingOperator(currentOperation))
			return "invalid_leading_operator"
		if (!this.verifyDecimals(currentOperation)) return "invalid_decimal"
		if (!this.verifyParentheses(currentOperation))
			return "unbalanced_parentheses"
		if (!this.verifyNoTrailingOperator(currentOperation))
			return "trailing_operator"

		return true
	}

	private verifyNotEmpty(currentOperation: Operation): boolean {
		return currentOperation.trim().length > 0
	}

	private verifyNumbers(currentOperation: Operation): boolean {
		const numberStrings = this.allowedNumbers.map(String)
		const allowedCharacters = new Set([...numberStrings, ...this.allowedSigns])

		for (const character of currentOperation) {
			if (!allowedCharacters.has(character)) return false
		}

		return true
	}

	private verifySigns(currentOperation: Operation): boolean {
		const arithmeticSigns = new Set(["+", "-", "*", "/"])

		for (let index = 0; index < currentOperation.length - 1; index++) {
			const currentCharacter = currentOperation[index]
			const nextCharacter = currentOperation[index + 1]

			if (
				arithmeticSigns.has(currentCharacter) &&
				arithmeticSigns.has(nextCharacter)
			) {
				return false
			}
		}

		return true
	}

	private verifyLeadingOperator(currentOperation: Operation): boolean {
		const arithmeticSigns = new Set(["+", "-", "*", "/"])
		const firstCharacter = currentOperation[0]

		if (
			firstCharacter &&
			arithmeticSigns.has(firstCharacter) &&
			firstCharacter !== "-"
		) {
			return false
		}

		return true
	}

	private verifyNoConsecutiveDots(currentOperation: Operation): boolean {
		return !currentOperation.includes("..")
	}

	private verifyDecimals(currentOperation: Operation): boolean {
		if (currentOperation.includes("..")) return false

		const segments = currentOperation.split(/[+\-*/()]/)
		for (const segment of segments) {
			const dotCount = (segment.match(/\./g) ?? []).length
			if (dotCount > 1) return false
		}

		return true
	}

	private verifyParentheses(currentOperation: Operation): boolean {
		let depth = 0

		for (const character of currentOperation) {
			if (character === "(") depth++
			else if (character === ")") depth--

			if (depth < 0) return false
		}

		return depth === 0
	}

	private verifyNoTrailingOperator(currentOperation: Operation): boolean {
		const incompleteEndCharacters = new Set(["+", "-", "*", "/", "."])
		const lastCharacter = currentOperation.at(-1)

		return (
			lastCharacter !== undefined && !incompleteEndCharacters.has(lastCharacter)
		)
	}
}
