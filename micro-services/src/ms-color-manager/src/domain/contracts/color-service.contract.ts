import type { ColorType, ColorTypeMap } from "../models"

export interface ColorServiceContract<ServiceColorType extends ColorType> {
	convert<TargetColorType extends Exclude<ColorType, ServiceColorType>>(
		color: ColorTypeMap[ServiceColorType],
		to: TargetColorType,
	): ColorTypeMap[TargetColorType]
	format(color: ColorTypeMap[ServiceColorType]): string
	generate(): ColorTypeMap[ServiceColorType]
	validate(color: ColorTypeMap[ServiceColorType]): boolean
}
