import type { VibrationPattern } from "../models"

export interface VibrationInterface {
	vibrate(pattern: VibrationPattern): boolean
}
