import { useTranslation } from "react-i18next"
import { useImageConverter } from "../../hooks"

export function useOpenImage() {
	const { domain } = useImageConverter()
	const { t } = useTranslation()

	const openImage = (): void => {
		domain.openImage()
	}

	const translations = {
		buttonName: t("mf-image-converter.open-image.button-name"),
	}

	return {
		openImage,
		translations,
	}
}
