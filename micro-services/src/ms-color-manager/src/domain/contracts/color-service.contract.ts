import type { ColorValue } from "../models"

export interface ColorServiceContract<
	ColorService extends ColorValue,
	ColorConvert = Exclude<ColorValue, ColorService>,
> {
	convert(color: ColorService, to: ColorConvert): ColorConvert
	validate(color: ColorService): boolean
}
