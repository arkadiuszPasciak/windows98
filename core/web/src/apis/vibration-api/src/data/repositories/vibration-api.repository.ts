import type { VibrationAPIRepositoryContract } from "../contracts"
import type { VibrationOptions, VibrationPattern } from "../models"

export class VibrationAPIRepository implements VibrationAPIRepositoryContract {
	public vibrate(pattern: VibrationPattern): boolean {
		return window.navigator.vibrate(pattern)
	}

	public vibrateWithOptions(options: VibrationOptions): boolean {
		return window.navigator.vibrate(options.pattern)
	}

	public cancelVibration(): boolean {
		return window.navigator.vibrate(0)
	}
}
