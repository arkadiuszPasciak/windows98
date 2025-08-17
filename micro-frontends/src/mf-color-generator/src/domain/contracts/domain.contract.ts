import type { ColorState } from "../models"

export interface ColorGeneratorDomainContract {
	currentColor: ColorState
	generateRandomColor(): void
}
