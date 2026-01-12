import type { DSSelectOption } from "@windows98/design-system"
import type { ReactEventHandler } from "react"
import { useTranslation } from "react-i18next"
import type { ImageFormat } from "../../../domain/models"
import { useImageConverter } from "../../hooks"

export const formats: Array<ImageFormat> = [
	"image/jpeg",
	"image/png",
	"image/webp",
]

export function useImageFormat() {
	const { domain } = useImageConverter()
	const { t } = useTranslation()

	const formatOptions: DSSelectOption[] = formats.map((format) => ({
		value: format,
		name: format,
	}))

	const formatValue = domain.format
	const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
		const newValue = event.currentTarget.value as ImageFormat

		if (newValue === formatValue) return

		domain.setFormat(newValue)
	}

	const isDisabled = domain.originalImageFile === null

	const translations = {
		selectLabel: t("mf-image-converter.image-format.select-label"),
	}

	return {
		handleSelectChange,
		formatValue,
		formatOptions,
		isDisabled,
		translations,
	}
}
