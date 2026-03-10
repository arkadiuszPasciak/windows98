import type { ColorServiceContract } from "../../contracts"
import type {
	CmykColor,
	ColorType,
	ColorTypeMap,
	HexColor,
	HslColor,
	HsvColor,
	RgbColor,
} from "../../models"
import { RgbColorService } from "./rgb-color.service"

export class HslColorService implements ColorServiceContract<"hsl"> {
	private rgbColorService: ColorServiceContract<"rgb">

	constructor() {
		this.rgbColorService = new RgbColorService()
	}

	public convert<TargetColorType extends Exclude<ColorType, "hsl">>(
		color: HslColor,
		to: TargetColorType,
	): ColorTypeMap[TargetColorType] {
		const converters: {
			[TKey in Exclude<ColorType, "hsl">]: () => ColorTypeMap[TKey]
		} = {
			rgb: () => this.hslToRgb(color),
			cmyk: () => this.hslToCmyk(color),
			hex: () => this.hslToHex(color),
			hsv: () => this.hslToHsv(color),
		}

		return converters[to]()
	}

	public format(color: HslColor): string {
		const { h, s, l } = color
		return `hsl(${h}, ${s}%, ${l}%)`
	}

	public generate(): HslColor {
		const rgb = this.rgbColorService.generate()

		return this.rgbColorService.convert(rgb, "hsl")
	}

	public validate(color: HslColor): boolean {
		return (
			color != null &&
			typeof color.h === "number" &&
			typeof color.s === "number" &&
			typeof color.l === "number" &&
			color.h >= 0 &&
			color.h <= 360 &&
			color.s >= 0 &&
			color.s <= 100 &&
			color.l >= 0 &&
			color.l <= 100
		)
	}

	private hslToCmyk(hsl: HslColor): CmykColor {
		const rgb = this.hslToRgb(hsl)

		return this.rgbColorService.convert(rgb, "cmyk")
	}

	private hslToHex(hsl: HslColor): HexColor {
		const rgb = this.hslToRgb(hsl)

		return this.rgbColorService.convert(rgb, "hex")
	}

	private hslToHsv(hsl: HslColor): HsvColor {
		const rgb = this.hslToRgb(hsl)

		return this.rgbColorService.convert(rgb, "hsv")
	}

	private hslToRgb(hsl: HslColor): RgbColor {
		const h = hsl.h / 360
		const s = hsl.s / 100
		const l = hsl.l / 100
		let r: number, g: number, b: number
		if (s === 0) {
			r = g = b = l
		} else {
			const hue2rgb = (p: number, q: number, t: number) => {
				if (t < 0) t += 1
				if (t > 1) t -= 1
				if (t < 1 / 6) return p + (q - p) * 6 * t
				if (t < 1 / 2) return q
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
				return p
			}
			const q = l < 0.5 ? l * (1 + s) : l + s - l * s
			const p = 2 * l - q
			r = hue2rgb(p, q, h + 1 / 3)
			g = hue2rgb(p, q, h)
			b = hue2rgb(p, q, h - 1 / 3)
		}
		return {
			r: Math.round(r * 255),
			g: Math.round(g * 255),
			b: Math.round(b * 255),
		}
	}
}
