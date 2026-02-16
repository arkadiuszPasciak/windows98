import type { ColorServiceContract } from "../../contracts"
import type {
	CmykColor,
	HexColor,
	HslColor,
	HsvColor,
	RgbColor,
} from "../../models"

export class RgbColorService implements ColorServiceContract<RgbColor> {
	public convert(
		color: RgbColor,
		to: "cmyk" | "hex" | "hsv" | "hsl",
	): CmykColor | HexColor | HslColor | HsvColor {
		switch (to) {
			case "cmyk":
				return this.rgbToCmyk(color)
			case "hex":
				return this.rgbToHex(color)
			case "hsl":
				return this.rgbToHsl(color)
			case "hsv":
				return this.rgbToHsv(color)
			default:
				throw new Error(`Unsupported conversion: ${to}`)
		}
	}

	public validate(color: RgbColor): boolean {
		return (
			color != null &&
			typeof color.r === "number" &&
			typeof color.g === "number" &&
			typeof color.b === "number" &&
			Number.isInteger(color.r) &&
			Number.isInteger(color.g) &&
			Number.isInteger(color.b) &&
			color.r >= 0 &&
			color.r <= 255 &&
			color.g >= 0 &&
			color.g <= 255 &&
			color.b >= 0 &&
			color.b <= 255
		)
	}

	private rgbToCmyk(rgb: RgbColor): CmykColor {
		const r = rgb.r / 255
		const g = rgb.g / 255
		const b = rgb.b / 255
		const k = 1 - Math.max(r, g, b)

		if (k === 1) {
			return { c: 0, m: 0, y: 0, k: 1 }
		}

		const c = (1 - r - k) / (1 - k)
		const m = (1 - g - k) / (1 - k)
		const y = (1 - b - k) / (1 - k)

		return {
			c: parseFloat(c.toFixed(4)),
			m: parseFloat(m.toFixed(4)),
			y: parseFloat(y.toFixed(4)),
			k: parseFloat(k.toFixed(4)),
		}
	}

	private rgbToHex(rgb: RgbColor): HexColor {
		const toHex = (v: number) => v.toString(16).padStart(2, "0")

		return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`
	}

	private rgbToHsl(rgb: RgbColor): HslColor {
		const r = rgb.r / 255
		const g = rgb.g / 255
		const b = rgb.b / 255
		const max = Math.max(r, g, b)
		const min = Math.min(r, g, b)
		let h = 0,
			s = 0,
			l = (max + min) / 2

		if (max !== min) {
			const d = max - min
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0)
					break
				case g:
					h = (b - r) / d + 2
					break
				case b:
					h = (r - g) / d + 4
					break
			}
			h /= 6
		}

		return {
			h: Math.round(h * 360),
			s: Math.round(s * 100),
			l: Math.round(l * 100),
		}
	}

	private rgbToHsv(rgb: RgbColor): HsvColor {
		const r = rgb.r / 255
		const g = rgb.g / 255
		const b = rgb.b / 255
		const max = Math.max(r, g, b)
		const min = Math.min(r, g, b)
		const v = max
		const d = max - min
		const s = max === 0 ? 0 : d / max
		let h = 0
		if (max === min) {
			h = 0
		} else {
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0)
					break
				case g:
					h = (b - r) / d + 2
					break
				case b:
					h = (r - g) / d + 4
					break
			}
			h /= 6
		}
		return {
			h: Math.round(h * 360),
			s: Math.round(s * 100),
			v: Math.round(v * 100),
		}
	}
}
