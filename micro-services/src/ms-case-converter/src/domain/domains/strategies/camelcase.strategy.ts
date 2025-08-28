import type { CaseConverterStrategyContract } from "../../contracts"

export class CamelCaseStrategy implements CaseConverterStrategyContract {
	public convert(text: string): string {
		return text
			.replace(/[-_\s.]+(.)?/g, (_match, character) =>
				character ? character.toUpperCase() : "",
			)
			.replace(/^(.)/, (match) => match.toLowerCase())
	}
}
