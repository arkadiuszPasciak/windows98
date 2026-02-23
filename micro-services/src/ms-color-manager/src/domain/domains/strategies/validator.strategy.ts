import type { ValidatorStrategyContract } from "../../contracts"
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

export class ValidatorStrategy implements ValidatorStrategyContract {
	private cmykColorService = new CmykColorService()
	private hexColorService = new HexColorService()
	private hslColorService = new HslColorService()
	private hsvColorService = new HsvColorService()
	private rgbColorService = new RgbColorService()

	public validate(type: ColorType, value: ColorValue): boolean {
		switch (type) {
			case "cmyk":
				return this.cmykColorService.validate(value as CmykColor)
			case "hex":
				return this.hexColorService.validate(value as HexColor)
			case "hsl":
				return this.hslColorService.validate(value as HslColor)
			case "hsv":
				return this.hsvColorService.validate(value as HsvColor)
			case "rgb":
				return this.rgbColorService.validate(value as RgbColor)
			default:
				throw new Error(`Unsupported color type: ${type}`)
		}
	}
}
