import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { ETimerStatus } from "../../../../domain/models"
import { useTimer } from "../../../hooks"

export const useReset = () => {
	const { t } = useTranslation()
	const { timerDomain } = useTimer()

	const translations = useMemo(() => {
		return {
			reset: t("mf-timer.reset"),
		}
	}, [t])

	const onClick = (): void => {
		if (disabled) return

		timerDomain.playerDomain.reset()
	}

	const disabled: boolean = !!(
		timerDomain.status === ETimerStatus.PLAY ||
		(timerDomain.time.seconds === 0 &&
			timerDomain.time.minutes === 0 &&
			timerDomain.time.hours === 0)
	)

	return {
		disabled,
		onClick,
		text: translations.reset,
	}
}
