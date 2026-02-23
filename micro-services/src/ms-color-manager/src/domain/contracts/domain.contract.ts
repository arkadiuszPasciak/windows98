import type { ColorType, ColorValue, HexColor, RgbColor } from "../models"

export interface ColorManagerDomainContract {
	generateColor(): { rgb: RgbColor; hex: HexColor }
	validateColor(type: ColorType, value: ColorValue): boolean
}
