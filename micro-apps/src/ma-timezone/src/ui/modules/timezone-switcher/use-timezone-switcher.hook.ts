import { useMemo } from "react"
import { useTimezone } from "../../hooks"
import { useTranslation } from "react-i18next"

export function useTimezoneSwitcher() {
	const { t } = useTranslation()
	const { timezoneService } = useTimezone()

	const dictionary = useMemo(
		() => ({
			timezones: timezoneService?.timezonesValuePairs?.map((timezone) => {
				return {
					value: timezone.value,
					name: t(timezone.label)
				}
			}),
		}),
		[t, timezoneService?.timezonesValuePairs],
	)

	return {
		dictionary
	}
}
