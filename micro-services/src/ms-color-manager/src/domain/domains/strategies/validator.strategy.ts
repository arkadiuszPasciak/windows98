import type { ValidatorStrategyContract } from "../../contracts"
import type { ColorServiceContract } from "../../contracts/color-service.contract"
import type { ColorType, ColorTypeMap } from "../../models"
import {
	CmykColorService,
	HexColorService,
	HslColorService,
	HsvColorService,
	RgbColorService,
} from "../services"

export class ValidatorStrategy implements ValidatorStrategyContract {
	private readonly services: {
		[ServiceColorType in ColorType]: ColorServiceContract<ServiceColorType>
	} = {
		cmyk: new CmykColorService(),
		hex: new HexColorService(),
		hsl: new HslColorService(),
		hsv: new HsvColorService(),
		rgb: new RgbColorService(),
	}

	public validate<TargetColorType extends ColorType>(
		type: TargetColorType,
		value: ColorTypeMap[TargetColorType],
	): boolean {
		return this.services[type].validate(value)
	}
}
