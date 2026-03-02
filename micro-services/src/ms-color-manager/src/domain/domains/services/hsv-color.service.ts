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

export class HsvColorService implements ColorServiceContract<"hsv"> {
	private rgbColorService: ColorServiceContract<"rgb">

	constructor() {
		this.rgbColorService = new RgbColorService()
	}

	public convert<TargetColorType extends Exclude<ColorType, "hsv">>(
		color: HsvColor,
		to: TargetColorType,
	): ColorTypeMap[TargetColorType] {
		const converters: {
			[TKey in Exclude<ColorType, "hsv">]: () => ColorTypeMap[TKey]
		} = {
			rgb: () => this.hsvToRgb(color),
			cmyk: () => this.hsvToCmyk(color),
			hex: () => this.hsvToHex(color),
			hsl: () => this.hsvToHsl(color),
		}

		return converters[to]()
	}

	public generate(): HsvColor {
		const rgb = this.rgbColorService.generate()

		return this.rgbColorService.convert(rgb, "hsv")
	}

	public validate(color: HsvColor): boolean {
		return (
			color != null &&
			typeof color.h === "number" &&
			typeof color.s === "number" &&
			typeof color.v === "number" &&
			color.h >= 0 &&
			color.h <= 360 &&
			color.s >= 0 &&
			color.s <= 100 &&
			color.v >= 0 &&
			color.v <= 100
		)
	}

	private hsvToCmyk(hsv: HsvColor): CmykColor {
		const rgb = this.hsvToRgb(hsv)

		return this.rgbColorService.convert(rgb, "cmyk")
	}

	private hsvToHex(hsv: HsvColor): HexColor {
		const rgb = this.hsvToRgb(hsv)

		return this.rgbColorService.convert(rgb, "hex")
	}

	private hsvToHsl(hsv: HsvColor): HslColor {
		const rgb = this.hsvToRgb(hsv)

		return this.rgbColorService.convert(rgb, "hsl")
	}

	private hsvToRgb(hsv: HsvColor): RgbColor {
		const h = hsv.h / 360
		const s = hsv.s / 100
		const v = hsv.v / 100
		let r = 0,
			g = 0,
			b = 0
		const i = Math.floor(h * 6)
		const f = h * 6 - i
		const p = v * (1 - s)
		const q = v * (1 - f * s)
		const t = v * (1 - (1 - f) * s)
		switch (i % 6) {
			case 0:
				r = v
				g = t
				b = p
				break
			case 1:
				r = q
				g = v
				b = p
				break
			case 2:
				r = p
				g = v
				b = t
				break
			case 3:
				r = p
				g = q
				b = v
				break
			case 4:
				r = t
				g = p
				b = v
				break
			case 5:
				r = v
				g = p
				b = q
				break
		}
		return {
			r: Math.round(r * 255),
			g: Math.round(g * 255),
			b: Math.round(b * 255),
		}
	}
}
