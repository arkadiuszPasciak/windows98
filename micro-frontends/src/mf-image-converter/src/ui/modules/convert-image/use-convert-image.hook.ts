import { useTranslation } from "react-i18next"
import { useImageConverter } from "../../hooks"

export function useConvertImage() {
	const { domain } = useImageConverter()
	const { t } = useTranslation()
	const convertImage = (): void => {
		domain.convertImage()
	}

	const isDisabled = domain.originalImageFile === null

	const translations = {
		buttonName: t("mf-image-converter.convert-image.button-name"),
	}

	return {
		convertImage,
		isDisabled,
		translations,
	}
}
