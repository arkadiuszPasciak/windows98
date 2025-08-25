import type { CaseConverterStrategyContract } from "../../contracts"

export class AlternateCaseStrategy implements CaseConverterStrategyContract {
	public convert(text: string): string {
		return text
			.split("")
			.map((character, index) =>
				index % 2 === 0 ? character.toLowerCase() : character.toUpperCase(),
			)
			.join("")
	}
}
