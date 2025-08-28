import type { CaseConverterStrategyContract } from "../../contracts"

export class DotCaseStrategy implements CaseConverterStrategyContract {
	public convert(text: string): string {
		return text
			.replace(/([a-z])([A-Z])/g, "$1.$2")
			.replace(/[-_\s]+/g, ".")
			.toLowerCase()
	}
}
