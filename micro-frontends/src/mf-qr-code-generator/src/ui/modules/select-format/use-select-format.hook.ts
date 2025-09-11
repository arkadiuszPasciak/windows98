import type { DSSelectOption } from "@windows98/design-system"
import type { ReactEventHandler } from "react"
import { useTranslation } from "react-i18next"
import type { Format } from "../../../domain/models"
import { useQRCodeGenerator } from "../../hooks"

export const formats: Array<Format> = ["png", "jpg", "svg"]

export default function useSelectFormat() {
	const { t } = useTranslation()
	const { domain } = useQRCodeGenerator()

	const translations = {
		label: t("mf-qr-code-generator.select-format.label"),
	}

	const formatOptions: DSSelectOption[] = formats.map((format) => ({
		value: format,
		name: format,
	}))

	const formatValue = domain.format
	const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
		const newValue = event.currentTarget.value as Format

		if (newValue === formatValue) return

		domain.setFormat(newValue)
	}

	return {
		handleSelectChange,
		formatValue,
		formatOptions,
		translations,
	}
}
