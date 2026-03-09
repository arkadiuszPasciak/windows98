import type { ColorType, ColorTypeMap } from "../models"

export interface ValidatorStrategyContract {
	validate<TargetColorType extends ColorType>(
		type: TargetColorType,
		value: ColorTypeMap[TargetColorType],
	): boolean
}
