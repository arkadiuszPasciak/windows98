import type { ColorServiceContract } from "../../contracts"
import type {
	CmykColor,
	HexColor,
	HslColor,
	HsvColor,
	RgbColor,
} from "../../models"
import { RgbColorService } from "./rgb-color.service"

export class HexColorService implements ColorServiceContract<"hex"> {
	private rgbColorService: ColorServiceContract<RgbColor>

	constructor() {
		this.rgbColorService = new RgbColorService()
	}

	public convert(
		color: HexColor,
		to: "cmyk" | "hsv" | "hsl" | "rgb",
	): CmykColor | RgbColor | HslColor | HsvColor {
		switch (to) {
			case "cmyk":
				return this.hexToCmyk(color)
			case "hsl":
				return this.hexToHsl(color)
			case "hsv":
				return this.hexToHsv(color)
			case "rgb":
				return this.hexToRgb(color)
			default:
				throw new Error(`Unsupported conversion: ${to}`)
		}
	}

	public generate(): "hex" {
		const rgb = this.rgbColorService.generate()

		return this.rgbColorService.convert(rgb, "hex") as "hex"
	}

	public validate(color: HexColor): boolean {
		return (
			typeof color === "string" &&
			/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)
		)
	}

	private hexToCmyk(hex: HexColor): CmykColor {
		const rgb = this.hexToRgb(hex)

		return this.rgbColorService.convert(rgb, "cmyk") as CmykColor
	}

	private hexToHsl(hex: HexColor): HslColor {
		const rgb = this.hexToRgb(hex)

		return this.rgbColorService.convert(rgb, "hsl") as HslColor
	}

	private hexToHsv(hex: HexColor): HsvColor {
		const rgb = this.hexToRgb(hex)

		return this.rgbColorService.convert(rgb, "hsv") as HsvColor
	}

	private hexToRgb(hex: HexColor): RgbColor {
		let h = hex.replace(/^#/, "")
		if (h.length === 3) {
			h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
		}
		const r = parseInt(h.substring(0, 2), 16)
		const g = parseInt(h.substring(2, 4), 16)
		const b = parseInt(h.substring(4, 6), 16)

		return { r, g, b }
	}
}
