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

export class HexColorService implements ColorServiceContract<"hex"> {
	private rgbColorService: ColorServiceContract<"rgb">

	constructor() {
		this.rgbColorService = new RgbColorService()
	}

	public convert<TargetColorType extends Exclude<ColorType, "hex">>(
		color: HexColor,
		to: TargetColorType,
	): ColorTypeMap[TargetColorType] {
		const converters: {
			[TKey in Exclude<ColorType, "hex">]: () => ColorTypeMap[TKey]
		} = {
			cmyk: () => this.hexToCmyk(color),
			rgb: () => this.hexToRgb(color),
			hsl: () => this.hexToHsl(color),
			hsv: () => this.hexToHsv(color),
		}

		return converters[to]()
	}

	public generate(): HexColor {
		const rgb = this.rgbColorService.generate()

		return this.rgbColorService.convert(rgb, "hex")
	}

	public validate(color: HexColor): boolean {
		return (
			typeof color === "string" &&
			/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)
		)
	}

	private hexToCmyk(hex: HexColor): CmykColor {
		const rgb = this.hexToRgb(hex)

		return this.rgbColorService.convert(rgb, "cmyk")
	}

	private hexToHsl(hex: HexColor): HslColor {
		const rgb = this.hexToRgb(hex)

		return this.rgbColorService.convert(rgb, "hsl")
	}

	private hexToHsv(hex: HexColor): HsvColor {
		const rgb = this.hexToRgb(hex)

		return this.rgbColorService.convert(rgb, "hsv")
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
