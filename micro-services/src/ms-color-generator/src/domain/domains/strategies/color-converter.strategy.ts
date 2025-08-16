import type { ColorConverterStrategyContract } from "../../contracts"
import type { RgbColor } from "../../models"

export class ColorConverterStrategy implements ColorConverterStrategyContract {
	public hexToRgb(hex: string): RgbColor {
		const cleanHex = this.removeHashFromHex(hex)
		this.validateHexFormat(cleanHex, hex)

		const r = Number.parseInt(cleanHex.substring(0, 2), 16)
		const g = Number.parseInt(cleanHex.substring(2, 4), 16)
		const b = Number.parseInt(cleanHex.substring(4, 6), 16)

		return { r, g, b }
	}

	public rgbToHex(rgb: RgbColor): string {
		this.validateRgbValues(rgb)

		const clampedRgb = this.roundAndClampRgbValues(rgb)
		return this.convertRgbToHexString(clampedRgb)
	}

	private removeHashFromHex(hex: string): string {
		return hex.replace("#", "")
	}

	private validateHexFormat(cleanHex: string, originalHex: string): void {
		if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
			throw new Error(`Invalid hex color format: ${originalHex}`)
		}
	}

	private validateRgbValues(rgb: RgbColor): void {
		if (
			rgb.r < 0 ||
			rgb.r > 255.9 ||
			rgb.g < 0 ||
			rgb.g > 255.9 ||
			rgb.b < 0 ||
			rgb.b > 255.9
		) {
			throw new Error(`Invalid RGB values: r=${rgb.r}, g=${rgb.g}, b=${rgb.b}`)
		}
	}

	private roundAndClampRgbValues(rgb: RgbColor): RgbColor {
		const roundedR = Math.round(rgb.r)
		const roundedG = Math.round(rgb.g)
		const roundedB = Math.round(rgb.b)

		return {
			r: Math.max(0, Math.min(255, roundedR)),
			g: Math.max(0, Math.min(255, roundedG)),
			b: Math.max(0, Math.min(255, roundedB)),
		}
	}

	private convertRgbToHexString(rgb: RgbColor): string {
		return `#${this.convertValueToHex(rgb.r)}${this.convertValueToHex(rgb.g)}${this.convertValueToHex(rgb.b)}`
	}

	private convertValueToHex(value: number): string {
		const hex = value.toString(16)
		return hex.length === 1 ? `0${hex}` : hex
	}
}
