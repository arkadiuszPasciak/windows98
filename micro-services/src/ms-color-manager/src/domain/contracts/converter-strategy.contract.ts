import type { ColorType, ColorValue } from "../models"

export interface ConverterStrategyContract {
	convert(type: ColorType, value: ColorValue, returnType: ColorType): ColorValue
}
