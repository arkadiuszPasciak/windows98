import type { CaseConverterStrategyContract } from "../../contracts"

export class LowercaseStrategy implements CaseConverterStrategyContract {
	public convert(text: string): string {
		return text.toLowerCase()
	}
}
