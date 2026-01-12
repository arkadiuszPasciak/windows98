import { useTranslation } from "react-i18next"
import { useImageConverter } from "../../hooks"

export function useDownloadImage() {
	const { domain } = useImageConverter()
	const { t } = useTranslation()

	const downloadImage = () => {
		domain.downloadImage()
	}

	const isDisabled = domain.convertedImageFile === null

	const translations = {
		buttonName: t("mf-image-converter.download-image.button-name"),
	}

	return {
		downloadImage,
		isDisabled,
		translations,
	}
}
