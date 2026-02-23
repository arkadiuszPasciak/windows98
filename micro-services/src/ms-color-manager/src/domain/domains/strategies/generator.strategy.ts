import type { GeneratorStrategyContract } from "../../contracts"
import type { ColorType, ColorValue } from "../../models"
import {
	CmykColorService,
	HexColorService,
	HslColorService,
	HsvColorService,
	RgbColorService,
} from "../services"

export class GeneratorStrategy implements GeneratorStrategyContract {
	private cmykColorService = new CmykColorService()
	private hexColorService = new HexColorService()
	private hslColorService = new HslColorService()
	private hsvColorService = new HsvColorService()
	private rgbColorService = new RgbColorService()

	public generate(type: ColorType): ColorValue {
		switch (type) {
			case "cmyk":
				return this.cmykColorService.generate()
			case "hex":
				return this.hexColorService.generate()
			case "hsl":
				return this.hslColorService.generate()
			case "hsv":
				return this.hsvColorService.generate()
			case "rgb":
				return this.rgbColorService.generate()
			default:
				throw new Error(`Unsupported color type: ${type}`)
		}
	}
}
