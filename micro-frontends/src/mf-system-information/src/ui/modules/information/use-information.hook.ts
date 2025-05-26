import { useTranslation } from "react-i18next"
import { useDomain } from "../../hooks"

export function useInformation() {
	const { t } = useTranslation()
	const domain = useDomain()

	const translations = {
		browserName: t("mf-system-information.browser-name"),
		deviceType: t("mf-system-information.device-type"),
		operatingSystem: t("mf-system-information.operating-system"),
	}

	return {
		browserName: domain.browserName,
		deviceType: domain.deviceType,
		operatingSystem: domain.operatingSystem,
		translations,
	}
}
