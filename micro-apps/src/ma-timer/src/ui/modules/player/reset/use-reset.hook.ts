import { useMemo } from "react"
import { useTimer } from "../../../hooks"
import { ETimerStatus } from "../../../../domain/models"
import { useTranslation } from "react-i18next"

export const useReset = () => {
	const { t } = useTranslation()
	const { timerDomain } = useTimer()

	const translations = useMemo(() => {
		return {
			reset: t("ma-timer.reset"),
		}
	}, [t])

	const onClick = (): void => {
		if (disabled) return

		timerDomain.playerDomain.reset()
	}

	const disabled: boolean =
		(timerDomain.status === ETimerStatus.PLAY) ||
			(timerDomain.time.seconds === 0 && timerDomain.time.minutes === 0 && timerDomain.time.hours === 0)
			? true : false

	return {
		disabled,
		onClick,
		text: translations.reset,
	}
}