import { useTranslation } from "react-i18next"
import { useQRCodeGenerator } from "../../hooks"

export default function useButtonGenerate() {
	const { t } = useTranslation()
	const { domain } = useQRCodeGenerator()

	const translations = {
		button: t("mf-qr-code-generator.button-generate.label"),
	}

	const onButtonClick = (): void => {
		domain.generateQRCode()
	}

	return {
		translations,
		onButtonClick,
	}
}
