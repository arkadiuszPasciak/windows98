import type { Color } from "../models"

export interface ColorGeneratorDomainContract {
	generateColor(): Color
}
