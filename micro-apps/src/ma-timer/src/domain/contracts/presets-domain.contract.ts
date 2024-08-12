import type {
	ETimerPresets,
} from "../models"

export interface TimerPresetsDomainContract {
	preset: ETimerPresets

	setPreset(preset: ETimerPresets): void
}
