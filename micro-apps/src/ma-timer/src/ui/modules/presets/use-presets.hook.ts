import { useMemo, useState } from "react"
import { useTimer } from '../../hooks'
import { ETimerPresets, ETimerStatus } from '../../../domain/models'
import { useTranslation } from 'react-i18next'

export const usePresets = () => {
	const { t } = useTranslation()
	const { timerDomain } = useTimer()
	const [
		selectedPreset,
		setSelectedPreset,
	] = useState<ETimerPresets>(timerDomain.presetsDomain.preset)

	const presets = useMemo(() => {
		return [
			{
				preset: ETimerPresets.THREE_MINUTES,
				content: t("ma-timer.presets.three-minutes"),
				id: "ma-timer-preset-3-min",
			},
			{
				preset: ETimerPresets.FIVE_MINUTES,
				content: t("ma-timer.presets.five-minutes"),
				id: "ma-timer-preset-5-min",
			},
			{
				preset: ETimerPresets.TEN_MINUTES,
				content: t("ma-timer.presets.ten-minutes"),
				id: "ma-timer-preset-10-min",
			},
			{
				preset: ETimerPresets.FIFTEEN_MINUTES,
				content: t("ma-timer.presets.fifteen-minutes"),
				id: "ma-timer-preset-15-min",
			},
			{
				preset: ETimerPresets.CUSTOM_MINUTES,
				content: t("ma-timer.presets.custom"),
				id: "ma-timer-preset-custom",
			},
		]
	}, [t, timerDomain.presetsDomain.preset])

	const setPreset = (preset: ETimerPresets): void => {
		if (disabled) return

		timerDomain.presetsDomain.setPreset(preset)
		setSelectedPreset(preset)
	}

	const disabled = timerDomain.status === ETimerStatus.PLAY ? true : false

	const title = t("ma-timer.presets.title")

	return {
		disabled,
		presets,
		setPreset,
		selectedPreset,
		title,
	}
}
