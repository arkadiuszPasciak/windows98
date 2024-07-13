import type {
	ETimerPresets,
} from "../models"

export default interface TimerPresetsDomainContract {
	preset: ETimerPresets

	setTimeByPreset(preset: ETimerPresets): void
}
