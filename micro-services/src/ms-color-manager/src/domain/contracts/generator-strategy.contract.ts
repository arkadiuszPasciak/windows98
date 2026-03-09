import type { ColorType, ColorTypeMap } from "../models"

export interface GeneratorStrategyContract {
	generate<TargetColorType extends ColorType>(
		type: TargetColorType,
	): ColorTypeMap[TargetColorType]
}
