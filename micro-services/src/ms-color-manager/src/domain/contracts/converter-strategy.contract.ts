import type { ColorType, ColorTypeMap } from "../models"

export interface ConverterStrategyContract {
	convert<
		TargetSourceColorType extends ColorType,
		TargetColorType extends Exclude<ColorType, TargetSourceColorType>,
	>(
		type: TargetSourceColorType,
		value: ColorTypeMap[TargetSourceColorType],
		returnType: TargetColorType,
	): ColorTypeMap[TargetColorType]
}
