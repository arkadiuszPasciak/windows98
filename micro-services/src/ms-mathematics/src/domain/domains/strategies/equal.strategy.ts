import type { EqualStrategyContract } from "../../contracts"
import type { Operation } from "../../models"

export class EqualStrategy implements EqualStrategyContract {
	public equal(currentOperation: Operation): Operation {
		const expression = currentOperation.replace(/\s+/g, "")
		const cursor = { position: 0 }
		const result = this.parseExpression(expression, cursor)

		return result.toString()
	}

	private parseExpression(
		expression: string,
		cursor: { position: number },
	): number {
		let left = this.parseTerm(expression, cursor)

		while (
			cursor.position < expression.length &&
			["+", "-"].includes(expression[cursor.position])
		) {
			const operator = expression[cursor.position++]
			const right = this.parseTerm(expression, cursor)
			left = operator === "+" ? left + right : left - right
		}

		return left
	}

	private parseTerm(expression: string, cursor: { position: number }): number {
		let left = this.parseFactor(expression, cursor)

		while (
			cursor.position < expression.length &&
			["*", "/"].includes(expression[cursor.position])
		) {
			const operator = expression[cursor.position++]
			const right = this.parseFactor(expression, cursor)
			left = operator === "*" ? left * right : left / right
		}

		return left
	}

	private parseFactor(
		expression: string,
		cursor: { position: number },
	): number {
		if (expression[cursor.position] === "(") {
			cursor.position++
			const result = this.parseExpression(expression, cursor)
			cursor.position++
			return result
		}
		const start = cursor.position

		if (expression[cursor.position] === "-") cursor.position++
		while (
			cursor.position < expression.length &&
			/[\d.]/.test(expression[cursor.position])
		) {
			cursor.position++
		}
		return parseFloat(expression.slice(start, cursor.position))
	}
}
