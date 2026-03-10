import type { ColorType, ColorTypeMap } from "../models"

export interface ColorManagerDomainContract {
	formatColor<TargetColorType extends ColorType>(
		type: TargetColorType,
		value: ColorTypeMap[TargetColorType],
	): string
	generateColor(): ColorTypeMap
	validateColor<TargetColorType extends ColorType>(
		type: TargetColorType,
		value: ColorTypeMap[TargetColorType],
	): boolean
}
