import type { VibrationInterface } from "../interfaces"
import type { VibrationOptions } from "../models"

export interface VibrationAPIRepositoryContract extends VibrationInterface {
	cancelVibration(): boolean
	vibrateWithOptions(options: VibrationOptions): boolean
}
