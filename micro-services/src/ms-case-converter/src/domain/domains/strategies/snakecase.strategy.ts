import type { CaseConverterStrategyContract } from "../../contracts"

export class SnakeCaseStrategy implements CaseConverterStrategyContract {
	public convert(text: string): string {
		return text
			.replace(/([a-z])([A-Z])/g, "$1_$2")
			.replace(/[-\s.]+/g, "_")
			.toLowerCase()
	}
}
