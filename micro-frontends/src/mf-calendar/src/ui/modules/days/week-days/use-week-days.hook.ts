import { useMemo } from "react"
import { useTranslation } from "react-i18next"

export function useWeekDays() {
	const { t } = useTranslation()

	const weekDays = useMemo(
		() => [
			{ id: 0, name: t("mf-calendar.days.sunday") },
			{ id: 1, name: t("mf-calendar.days.monday") },
			{ id: 2, name: t("mf-calendar.days.tuesday") },
			{ id: 3, name: t("mf-calendar.days.wednesday") },
			{ id: 4, name: t("mf-calendar.days.thursday") },
			{ id: 5, name: t("mf-calendar.days.friday") },
			{ id: 6, name: t("mf-calendar.days.saturday") },
		],
		[t],
	)

	return {
		weekDays,
	}
}
