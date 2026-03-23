import type { ColorState, ColorType, FormattedColorState } from "../models"

export interface ColorGeneratorDomainContract {
	currentColor: ColorState
	formattedColor: FormattedColorState

	generateRandomColor(): void
	copyColor(type: ColorType): Promise<void>
}
