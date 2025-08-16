import type { ColorConverterStrategyContract } from "../../contracts"
import type { RgbColor } from "../../models"

export class ColorConverterStrategy implements ColorConverterStrategyContract {
	private readonly MIN_RGB_VALUE = 0
	private readonly MAX_RGB_VALUE = 255
	private readonly MAX_RGB_VALUE_WITH_TOLERANCE = 255.9
	private readonly HEX_LENGTH = 6
	private readonly HEX_RADIX = 16

	public hexToRgb(hex: string): RgbColor {
		const cleanHex = this.removeHashFromHex(hex)
		this.validateHexFormat(cleanHex, hex)

		const r = Number.parseInt(cleanHex.substring(0, 2), this.HEX_RADIX)
		const g = Number.parseInt(cleanHex.substring(2, 4), this.HEX_RADIX)
		const b = Number.parseInt(cleanHex.substring(4, 6), this.HEX_RADIX)

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
		if (
			!/^[0-9A-Fa-f]{6}$/.test(cleanHex) ||
			cleanHex.length !== this.HEX_LENGTH
		) {
			throw new Error(`Invalid hex color format: ${originalHex}`)
		}
	}

	private validateRgbValues(rgb: RgbColor): void {
		if (
			rgb.r < this.MIN_RGB_VALUE ||
			rgb.r > this.MAX_RGB_VALUE_WITH_TOLERANCE ||
			rgb.g < this.MIN_RGB_VALUE ||
			rgb.g > this.MAX_RGB_VALUE_WITH_TOLERANCE ||
			rgb.b < this.MIN_RGB_VALUE ||
			rgb.b > this.MAX_RGB_VALUE_WITH_TOLERANCE
		) {
			throw new Error(`Invalid RGB values: r=${rgb.r}, g=${rgb.g}, b=${rgb.b}`)
		}
	}

	private roundAndClampRgbValues(rgb: RgbColor): RgbColor {
		const roundedR = Math.round(rgb.r)
		const roundedG = Math.round(rgb.g)
		const roundedB = Math.round(rgb.b)

		return {
			r: Math.max(this.MIN_RGB_VALUE, Math.min(this.MAX_RGB_VALUE, roundedR)),
			g: Math.max(this.MIN_RGB_VALUE, Math.min(this.MAX_RGB_VALUE, roundedG)),
			b: Math.max(this.MIN_RGB_VALUE, Math.min(this.MAX_RGB_VALUE, roundedB)),
		}
	}

	private convertRgbToHexString(rgb: RgbColor): string {
		return `#${this.convertValueToHex(rgb.r)}${this.convertValueToHex(rgb.g)}${this.convertValueToHex(rgb.b)}`
	}

	private convertValueToHex(value: number): string {
		const hex = value.toString(this.HEX_RADIX)
		return hex.length === 1 ? `0${hex}` : hex
	}
}
