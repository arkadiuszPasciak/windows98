import type { ColorType, ColorValue } from "../models"

export interface GeneratorStrategyContract {
	generate(type: ColorType): ColorValue
}
