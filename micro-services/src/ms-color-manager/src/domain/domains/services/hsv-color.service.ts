import type { ColorServiceContract } from "../../contracts"
import type {
	CmykColor,
	HexColor,
	HslColor,
	HsvColor,
	RgbColor,
} from "../../models"
import { RgbColorService } from "./rgb-color.service"

export class HsvColorService implements ColorServiceContract<HsvColor> {
	private rgbColorService: ColorServiceContract<RgbColor>

	constructor() {
		this.rgbColorService = new RgbColorService()
	}

	public convert(
		color: HsvColor,
		to: "rgb" | "cmyk" | "hex" | "hsl",
	): RgbColor | CmykColor | HexColor | HslColor {
		switch (to) {
			case "rgb":
				return this.hsvToRgb(color)
			case "cmyk":
				return this.hsvToCmyk(color)
			case "hex":
				return this.hsvToHex(color)
			case "hsl":
				return this.hsvToHsl(color)
			default:
				throw new Error(`Unsupported conversion: ${to}`)
		}
	}

	public generate(): HsvColor {
		const rgb = this.rgbColorService.generate()

		return this.rgbColorService.convert(rgb, "hsv") as HsvColor
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

		return this.rgbColorService.convert(rgb, "cmyk") as CmykColor
	}

	private hsvToHex(hsv: HsvColor): HexColor {
		const rgb = this.hsvToRgb(hsv)

		return this.rgbColorService.convert(rgb, "hex") as HexColor
	}

	private hsvToHsl(hsv: HsvColor): HslColor {
		const rgb = this.hsvToRgb(hsv)

		return this.rgbColorService.convert(rgb, "hsl") as HslColor
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
