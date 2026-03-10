import type { ColorType, ColorTypeMap } from "../models"

export interface FormatterStrategyContract {
	format<TargetSourceColorType extends ColorType>(
		type: TargetSourceColorType,
		value: ColorTypeMap[TargetSourceColorType],
	): string
}
