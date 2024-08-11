import { useMemo } from "react"
import { useTimer } from "../../../hooks"
import { ETimerStatus } from "../../../../domain/models"
import { useTranslation } from "react-i18next"

export const useStartAndStop = () => {
	const { t } = useTranslation()
	const { timerDomain } = useTimer()

	const translations = useMemo(() => {
		return {
			start: t("ma-timer.start"),
			stop: t("ma-timer.stop"),
		}
	}, [t])

	const onClick = (): void => {
		if (timerDomain.status === ETimerStatus.PLAY) {
			timerDomain.playerDomain.stop()
		} else {
			timerDomain.playerDomain.start()
		}
	}

	const text: string = timerDomain.status === ETimerStatus.PLAY ? translations.stop : translations.start

	const disabled: boolean = timerDomain.time.seconds === 0 && timerDomain.time.minutes === 0 && timerDomain.time.hours === 0
		? true : false

	return {
		disabled,
		onClick,
		text,
	}
}
