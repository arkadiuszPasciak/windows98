import type { ColorType, ColorTypeMap, HexColor, RgbColor } from "../models"

export interface ColorManagerDomainContract {
	generateColor(): { rgb: RgbColor; hex: HexColor }
	validateColor<TargetColorType extends ColorType>(
		type: TargetColorType,
		value: ColorTypeMap[TargetColorType],
	): boolean
}
