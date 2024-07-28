import { State } from '@windows98/toolkit'
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
				content: t("ma-timer.presets.three-minutes"),
				id: "ma-timer-preset-3-min",
				initialValue: false,
				onChange: timerDomain.presetsDomain.setPreset(ETimerPresets.THREE_MINUTES),
				state: State.IDLE
			},
			{
				content: t("ma-timer.presets.five-minutes"),
				id: "ma-timer-preset-5-min",
				initialValue: false,
				onChange: timerDomain.presetsDomain.setPreset(ETimerPresets.FIVE_MINUTES),
				state: State.IDLE
			},
			{
				content: t("ma-timer.presets.ten-minutes"),
				id: "ma-timer-preset-10-min",
				initialValue: false,
				onChange: timerDomain.presetsDomain.setPreset(ETimerPresets.TEN_MINUTES),
				state: State.IDLE
			},
			{
				content: t("ma-timer.presets.fifteen-minutes"),
				id: "ma-timer-preset-15-min",
				initialValue: false,
				onChange: timerDomain.presetsDomain.setPreset(ETimerPresets.FIFTEEN_MINUTES),
				state: State.IDLE
			},
			{
				content: t("ma-timer.presets.custom"),
				id: "ma-timer-preset-custom",
				initialValue: false,
				onChange: timerDomain.presetsDomain.setPreset(ETimerPresets.CUSTOM_MINUTES),
				state: State.ACTIVE
			},
		]
	}, [t, timerDomain.presetsDomain])

	const isDisabled = timerDomain.status === ETimerStatus.PLAY ? true : false

	return {
		presets,
		isDisabled,
	}
}
