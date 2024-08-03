import { useMemo } from "react"
import { useTimer } from '../../hooks'
import { ETimerPresets, ETimerStatus } from '../../../domain/models'
import { useTranslation } from 'react-i18next'

export const usePresets = () => {
	const { t } = useTranslation()
	const { timerDomain } = useTimer()

	const presets = useMemo(() => {
		return [
			{
				initialChecked: false,
				content: t("ma-timer.presets.three-minutes"),
				id: "ma-timer-preset-3-min",
				setPreset: () => timerDomain.presetsDomain.setPreset(ETimerPresets.THREE_MINUTES),
			},
			{
				initialChecked: false,
				content: t("ma-timer.presets.five-minutes"),
				id: "ma-timer-preset-5-min",
				setPreset: () => timerDomain.presetsDomain.setPreset(ETimerPresets.FIVE_MINUTES),
			},
			{
				initialChecked: false,
				content: t("ma-timer.presets.ten-minutes"),
				id: "ma-timer-preset-10-min",
				setPreset: () => timerDomain.presetsDomain.setPreset(ETimerPresets.TEN_MINUTES),
			},
			{
				initialChecked: false,
				content: t("ma-timer.presets.fifteen-minutes"),
				id: "ma-timer-preset-15-min",
				setPreset: () => timerDomain.presetsDomain.setPreset(ETimerPresets.FIFTEEN_MINUTES),
			},
			{
				initialChecked: true,
				content: t("ma-timer.presets.custom"),
				id: "ma-timer-preset-custom",
				setPreset: () => timerDomain.presetsDomain.setPreset(ETimerPresets.CUSTOM_MINUTES),
			},
		]
	}, [t, timerDomain.presetsDomain.preset])

	const disabled = timerDomain.status === ETimerStatus.PLAY ? true : false

	return {
		presets,
		disabled,
	}
}
