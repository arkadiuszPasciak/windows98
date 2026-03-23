import type { MSColorManagerTypes } from "@windows98/micro-services"
import type { ColorType } from "./types.model"

export interface ColorState extends Record<ColorType, string | object> {
	cmyk: MSColorManagerTypes.CmykColor
	hex: MSColorManagerTypes.HexColor
	hsl: MSColorManagerTypes.HslColor
	hsv: MSColorManagerTypes.HsvColor
	rgb: MSColorManagerTypes.RgbColor
}

export type FormattedColorState = {
	[Color in ColorType]: string
}
