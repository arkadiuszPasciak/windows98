import { useEffect, useMemo } from "react"
import { useTranslation } from "react-i18next"
import useTimezone from '../../hooks/use-timezone.hook'

export function useWrapper() {
	const { t } = useTranslation()
	const { timezoneService } = useTimezone()


	useEffect(() => {
		timezoneService.generateTimezones()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const dictionary = useMemo(
		() => ({
			title: t("ma-timezone.wrapper.title"),
		}),
		[t],
	)

	return {
		title: dictionary.title,
	}
}
