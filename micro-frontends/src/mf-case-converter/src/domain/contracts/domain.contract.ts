import type { Cases } from "../models"

export interface CaseConverterDomainContract extends Cases {
	inputValue: string

	convertAllCases(): void
	setInputValue(value: string): void
}
