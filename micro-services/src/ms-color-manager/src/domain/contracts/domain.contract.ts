import type { ColorType, ColorTypeMap } from "../models"

export interface ColorManagerDomainContract {
	generateColor(): ColorTypeMap
	validateColor<TargetColorType extends ColorType>(
		type: TargetColorType,
		value: ColorTypeMap[TargetColorType],
	): boolean
}
