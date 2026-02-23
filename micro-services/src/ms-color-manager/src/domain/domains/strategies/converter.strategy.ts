import type { ConverterStrategyContract } from "../../contracts"
import type {
	CmykColor,
	ColorType,
	ColorValue,
	HexColor,
	HslColor,
	HsvColor,
	RgbColor,
} from "../../models"
import {
	CmykColorService,
	HexColorService,
	HslColorService,
	HsvColorService,
	RgbColorService,
} from "../services"

export class ConverterStrategy implements ConverterStrategyContract {
	private cmykColorService = new CmykColorService()
	private hexColorService = new HexColorService()
	private hslColorService = new HslColorService()
	private hsvColorService = new HsvColorService()
	private rgbColorService = new RgbColorService()

	public convert(
		type: ColorType,
		value: ColorValue,
		returnType: ColorType,
	): ColorValue {
		switch (type) {
			case "cmyk":
				return this.cmykColorService.convert(
					value as CmykColor,
					returnType as Exclude<ColorType, "cmyk">,
				)
			case "hex":
				return this.hexColorService.convert(
					value as HexColor,
					returnType as Exclude<ColorType, "hex">,
				)
			case "hsl":
				return this.hslColorService.convert(
					value as HslColor,
					returnType as Exclude<ColorType, "hsl">,
				)
			case "hsv":
				return this.hsvColorService.convert(
					value as HsvColor,
					returnType as Exclude<ColorType, "hsv">,
				)
			case "rgb":
				return this.rgbColorService.convert(
					value as RgbColor,
					returnType as Exclude<ColorType, "rgb">,
				)
			default:
				throw new Error(`Unsupported color type: ${type}`)
		}
	}
}
