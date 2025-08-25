import type { CaseConverterStrategyContract } from "../../contracts"

export class UppercaseStrategy implements CaseConverterStrategyContract {
	public convert(text: string): string {
		return text.toUpperCase()
	}
}
