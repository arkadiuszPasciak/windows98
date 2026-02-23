import type { ColorType, HexColor, RgbColor } from "../models"

export interface ColorManagerDomainContract {
	generateColor(): { rgb: RgbColor; hex: HexColor }
	validateColor(type: ColorType, value: string): boolean
}
