import type { ColorServiceContract } from "../../contracts"
import type {
	CmykColor,
	HexColor,
	HslColor,
	HsvColor,
	RgbColor,
} from "../../models"
import { RgbColorService } from "./rgb-color.service"

export class CmykColorService implements ColorServiceContract<CmykColor> {
	private rgbColorService: ColorServiceContract<RgbColor>

	constructor() {
		this.rgbColorService = new RgbColorService()
	}

	public convert(
		color: CmykColor,
		to: "rgb" | "hex" | "hsv" | "hsl",
	): RgbColor | HexColor | HslColor | HsvColor {
		switch (to) {
			case "rgb":
				return this.cmykToRgb(color)
			case "hex":
				return this.cmykToHex(color)
			case "hsl":
				return this.cmykToHsl(color)
			case "hsv":
				return this.cmykToHsv(color)
			default:
				throw new Error(`Unsupported conversion: ${to}`)
		}
	}

	public validate(color: CmykColor): boolean {
		return (
			color != null &&
			typeof color.c === "number" &&
			typeof color.m === "number" &&
			typeof color.y === "number" &&
			typeof color.k === "number" &&
			color.c >= 0 &&
			color.c <= 1 &&
			color.m >= 0 &&
			color.m <= 1 &&
			color.y >= 0 &&
			color.y <= 1 &&
			color.k >= 0 &&
			color.k <= 1
		)
	}

	private cmykToRgb(cmyk: CmykColor): RgbColor {
		const r = Math.round(255 * (1 - cmyk.c) * (1 - cmyk.k))
		const g = Math.round(255 * (1 - cmyk.m) * (1 - cmyk.k))
		const b = Math.round(255 * (1 - cmyk.y) * (1 - cmyk.k))

		return { r, g, b }
	}

	private cmykToHex(cmyk: CmykColor): HexColor {
		const rgb = this.cmykToRgb(cmyk)

		return this.rgbColorService.convert(rgb, "hex") as HexColor
	}

	private cmykToHsl(cmyk: CmykColor): HslColor {
		const rgb = this.cmykToRgb(cmyk)

		return this.rgbColorService.convert(rgb, "hsl") as HslColor
	}

	private cmykToHsv(cmyk: CmykColor): HsvColor {
		const rgb = this.cmykToRgb(cmyk)

		return this.rgbColorService.convert(rgb, "hsv") as HsvColor
	}
}
