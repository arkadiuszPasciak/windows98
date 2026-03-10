import type { FormatterStrategyContract } from "../../contracts"
import type { ColorServiceContract } from "../../contracts/color-service.contract"
import type { ColorType, ColorTypeMap } from "../../models"
import {
	CmykColorService,
	HexColorService,
	HslColorService,
	HsvColorService,
	RgbColorService,
} from "../services"

export class FormatterStrategy implements FormatterStrategyContract {
	private readonly services: {
		[ServiceColorType in ColorType]: ColorServiceContract<ServiceColorType>
	} = {
		cmyk: new CmykColorService(),
		hex: new HexColorService(),
		hsl: new HslColorService(),
		hsv: new HsvColorService(),
		rgb: new RgbColorService(),
	}

	public format<TargetSourceColorType extends ColorType>(
		type: TargetSourceColorType,
		value: ColorTypeMap[TargetSourceColorType],
	): string {
		return this.services[type].format(value)
	}
}
