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

export class CmykColorService implements ColorServiceContract<"cmyk"> {
	private rgbColorService: ColorServiceContract<"rgb">

	constructor() {
		this.rgbColorService = new RgbColorService()
	}

	public convert<TargetColorType extends Exclude<ColorType, "cmyk">>(
		color: CmykColor,
		to: TargetColorType,
	): ColorTypeMap[TargetColorType] {
		const converters: {
			[TKey in Exclude<ColorType, "cmyk">]: () => ColorTypeMap[TKey]
		} = {
			rgb: () => this.cmykToRgb(color),
			hex: () => this.cmykToHex(color),
			hsl: () => this.cmykToHsl(color),
			hsv: () => this.cmykToHsv(color),
		}

		return converters[to]()
	}

	public format(color: CmykColor): string {
		const { c, m, y, k } = color
		return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`
	}

	public generate(): CmykColor {
		const rgb = this.rgbColorService.generate()

		return this.rgbColorService.convert(rgb, "cmyk")
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

		return this.rgbColorService.convert(rgb, "hex")
	}

	private cmykToHsl(cmyk: CmykColor): HslColor {
		const rgb = this.cmykToRgb(cmyk)

		return this.rgbColorService.convert(rgb, "hsl")
	}

	private cmykToHsv(cmyk: CmykColor): HsvColor {
		const rgb = this.cmykToRgb(cmyk)

		return this.rgbColorService.convert(rgb, "hsv")
	}
}
