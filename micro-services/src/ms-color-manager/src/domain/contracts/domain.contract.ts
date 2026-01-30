import type { Color } from "../models"

export interface ColorManagerDomainContract {
	generateColor(): Color
}
