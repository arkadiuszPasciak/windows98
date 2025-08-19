import type { ColorState } from "../models"

export interface ColorGeneratorDomainContract {
	currentColor: ColorState
	generateRandomColor(): void
	copyHexColor(): Promise<void>
	copyRgbColor(): Promise<void>
}
