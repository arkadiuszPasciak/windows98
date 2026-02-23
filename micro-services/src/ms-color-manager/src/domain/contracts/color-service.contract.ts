import type { ColorValue } from "../models"

export interface ColorServiceContract<
	ColorService extends ColorValue,
	ColorConvert = Exclude<ColorValue, ColorService>,
> {
	convert(color: ColorService, to: ColorConvert): ColorConvert
	generate(): ColorService
	validate(color: ColorService): boolean
}
