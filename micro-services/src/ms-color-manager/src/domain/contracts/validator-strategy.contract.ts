import type { ColorType, ColorValue } from "../models"

export interface ValidatorStrategyContract {
	validate(type: ColorType, value: ColorValue): boolean
}
