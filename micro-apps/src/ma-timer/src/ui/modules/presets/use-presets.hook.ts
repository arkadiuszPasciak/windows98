import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { ETimerPresets, ETimerStatus } from "../../../domain/models"
import { useTimer } from "../../hooks"

export const usePresets = () => {
	const { t } = useTranslation()
	const { timerDomain } = useTimer()
	const [selectedPreset, setSelectedPreset] = useState<ETimerPresets>(
		timerDomain.presetsDomain.preset,
	)

	const presets = useMemo(() => {
		return [
			{
				preset: ETimerPresets.THREE_MINUTES,
				content: t("ma-timer.presets.three-minutes"),
				id: "ma-timer-preset-3-minutes",
			},
			{
				preset: ETimerPresets.FIVE_MINUTES,
				content: t("ma-timer.presets.five-minutes"),
				id: "ma-timer-preset-5-minutes",
			},
			{
				preset: ETimerPresets.TEN_MINUTES,
				content: t("ma-timer.presets.ten-minutes"),
				id: "ma-timer-preset-10-minutes",
			},
			{
				preset: ETimerPresets.FIFTEEN_MINUTES,
				content: t("ma-timer.presets.fifteen-minutes"),
				id: "ma-timer-preset-15-minutes",
			},
			{
				preset: ETimerPresets.CUSTOM_MINUTES,
				content: t("ma-timer.presets.custom"),
				id: "ma-timer-preset-custom",
			},
		]
	}, [t])

	const setPreset = (preset: ETimerPresets): void => {
		if (disabled) return

		timerDomain.presetsDomain.setPreset(preset)
		setSelectedPreset(preset)
	}

	const disabled = timerDomain.status === ETimerStatus.PLAY

	const title = t("ma-timer.presets.title")

	return {
		disabled,
		presets,
		setPreset,
		selectedPreset,
		title,
	}
}
