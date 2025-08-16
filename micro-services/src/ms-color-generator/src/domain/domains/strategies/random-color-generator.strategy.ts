import type { RandomColorGeneratorStrategyContract } from "../../contracts"

export class RandomColorGeneratorStrategy
	implements RandomColorGeneratorStrategyContract
{
	public generateRandomHex(): string {
		const rgbValues = this.generateRandomRgbValues()
		return this.convertRgbToHexString(rgbValues)
	}

	private generateRandomRgbValues(): { r: number; g: number; b: number } {
		return {
			r: Math.floor(Math.random() * 256),
			g: Math.floor(Math.random() * 256),
			b: Math.floor(Math.random() * 256),
		}
	}

	private convertRgbToHexString(rgb: {
		r: number
		g: number
		b: number
	}): string {
		return `#${this.convertValueToHex(rgb.r)}${this.convertValueToHex(rgb.g)}${this.convertValueToHex(rgb.b)}`
	}

	private convertValueToHex(value: number): string {
		const hex = value.toString(16)
		return hex.length === 1 ? `0${hex}` : hex
	}
}
