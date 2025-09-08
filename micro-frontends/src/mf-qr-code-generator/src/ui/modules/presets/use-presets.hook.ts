import { useTranslation } from "react-i18next"
import type { Type } from "../../../domain/models"
import { useQRCodeGenerator } from "../../hooks"
import type { PresetItem } from "./presets.type"

export const usePresets = () => {
	const { t } = useTranslation()
	const { domain } = useQRCodeGenerator()

	const translations = {
		email: t("mf-qr-code-generator.presets.email"),
		label: t("mf-qr-code-generator.presets.label"),
		phone: t("mf-qr-code-generator.presets.phone"),
		sms: t("mf-qr-code-generator.presets.sms"),
		website: t("mf-qr-code-generator.presets.website"),
	}

	const presets: Array<PresetItem> = [
		{
			content: translations.email,
			id: "email",
		},
		{
			content: translations.phone,
			id: "phone",
		},
		{
			content: translations.sms,
			id: "sms",
		},
		{
			content: translations.website,
			id: "website",
		},
	]

	const presetValue = domain.type
	const setPresetValue = (preset: Type) => {
		if (preset === presetValue) return

		domain.setType(preset)
	}

	return {
		presets,
		presetValue,
		setPresetValue,
		translations,
	}
}
