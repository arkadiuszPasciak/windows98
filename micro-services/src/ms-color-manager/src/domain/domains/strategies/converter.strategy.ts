import type { ConverterStrategyContract } from "../../contracts"
import type { ColorServiceContract } from "../../contracts/color-service.contract"
import type { ColorType, ColorTypeMap } from "../../models"
import {
	CmykColorService,
	HexColorService,
	HslColorService,
	HsvColorService,
	RgbColorService,
} from "../services"

export class ConverterStrategy implements ConverterStrategyContract {
	private readonly services: {
		[ServiceColorType in ColorType]: ColorServiceContract<ServiceColorType>
	} = {
		cmyk: new CmykColorService(),
		hex: new HexColorService(),
		hsl: new HslColorService(),
		hsv: new HsvColorService(),
		rgb: new RgbColorService(),
	}

	public convert<
		TargetSourceColorType extends ColorType,
		TargetColorType extends Exclude<ColorType, TargetSourceColorType>,
	>(
		type: TargetSourceColorType,
		value: ColorTypeMap[TargetSourceColorType],
		returnType: TargetColorType,
	): ColorTypeMap[TargetColorType] {
		return this.services[type].convert(value, returnType)
	}
}
