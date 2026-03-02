import type { GeneratorStrategyContract } from "../../contracts"
import type { ColorServiceContract } from "../../contracts/color-service.contract"
import type { ColorType, ColorTypeMap } from "../../models"
import {
	CmykColorService,
	HexColorService,
	HslColorService,
	HsvColorService,
	RgbColorService,
} from "../services"

export class GeneratorStrategy implements GeneratorStrategyContract {
	private readonly services: {
		[ServiceColorType in ColorType]: ColorServiceContract<ServiceColorType>
	} = {
		cmyk: new CmykColorService(),
		hex: new HexColorService(),
		hsl: new HslColorService(),
		hsv: new HsvColorService(),
		rgb: new RgbColorService(),
	}

	public generate<TargetColorType extends ColorType>(
		type: TargetColorType,
	): ColorTypeMap[TargetColorType] {
		return this.services[type].generate()
	}
}
