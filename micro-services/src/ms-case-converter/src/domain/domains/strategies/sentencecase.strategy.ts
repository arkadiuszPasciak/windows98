import type { CaseConverterStrategyContract } from "../../contracts"

export class SentenceCaseStrategy implements CaseConverterStrategyContract {
	public convert(text: string): string {
		return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
	}
}
