import type { CaseConverterStrategyContract } from "../../contracts"

export class TitleCaseStrategy implements CaseConverterStrategyContract {
	public convert(text: string): string {
		return text.replace(
			/\w\S*/g,
			(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
		)
	}
}
