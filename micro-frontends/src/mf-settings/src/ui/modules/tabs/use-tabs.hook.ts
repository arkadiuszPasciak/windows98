import { useTranslation } from "react-i18next"
import { CustomiseTab } from "./customise/customise"
import { DateAndTimeTab } from "./date-and-time/date-and-time"
import { GeneralTab } from "./general/general"

export function useTabs() {
	const { t } = useTranslation()

	const translations = {
		customise: t("mf-settings.customise"),
		dateAndTime: t("mf-settings.date-and-time"),
		general: t("mf-settings.general"),
	}

	const tabs = [
		{
			id: "general",
			title: translations.general,
			component: GeneralTab,
		},
		{
			id: "date-and-time",
			title: translations.dateAndTime,
			component: DateAndTimeTab,
		},
		{
			id: "customise",
			title: translations.customise,
			component: CustomiseTab,
		},
	]

	return {
		tabs,
	}
}
