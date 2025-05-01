import { useEffect, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useTimezone } from "../../hooks"

export function useWrapper() {
	const { t } = useTranslation()
	const { timezoneService } = useTimezone()

	useEffect(() => {
		timezoneService.generateTimezones()
	})

	const dictionary = useMemo(
		() => ({
			title: t("mf-timezone.wrapper.title"),
		}),
		[t],
	)

	return {
		title: dictionary.title,
	}
}
