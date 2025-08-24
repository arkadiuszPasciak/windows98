import { useTranslation } from "react-i18next"
import { useConfig, useSnapshot } from "../../hooks"

export function useCapturePhoto() {
	const { domain } = useSnapshot()
	const { config } = useConfig()
	const { t } = useTranslation()

	const capturePhoto = () => {
		if (config.htmlVideoElement) {
			domain.getSnapshot(config.htmlVideoElement)
		}
	}

	const translations = {
		name: t("mf-snapshot.capture-photo"),
	}

	const isDisabled = !config.htmlVideoElement

	return {
		capturePhoto,
		isDisabled,
		translations,
	}
}
