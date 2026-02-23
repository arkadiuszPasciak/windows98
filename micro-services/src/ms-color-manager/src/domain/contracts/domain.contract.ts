import type { HexColor, RgbColor } from "../models"

export interface ColorManagerDomainContract {
	generateColor(): { rgb: RgbColor; hex: HexColor }
}
