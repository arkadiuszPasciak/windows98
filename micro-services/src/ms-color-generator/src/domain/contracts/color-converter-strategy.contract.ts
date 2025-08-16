import type { RgbColor } from "../models"

export interface ColorConverterStrategyContract {
	hexToRgb(hex: string): RgbColor
	rgbToHex(rgb: RgbColor): string
}
