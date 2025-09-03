import type { DSSelectOption } from "@windows98/design-system"
import type { ReactEventHandler } from "react"
import { useTranslation } from "react-i18next"
import type { Size } from "../../../domain/models"
import { useQRCodeGenerator } from "../../hooks"

export const sizes: Array<Size> = [
	"150x150",
	"200x200",
	"300x300",
	"400x400",
	"500x500",
]

export default function useSelectSize() {
	const { t } = useTranslation()
	const { domain } = useQRCodeGenerator()

	const translations = {
		label: t("mf-qr-code-generator.select-size.label"),
	}

	const sizeOptions: DSSelectOption[] = sizes.map((size) => ({
		value: size,
		name: size,
	}))

	const sizeValue = domain.size
	const handleSelectChange: ReactEventHandler<HTMLSelectElement> = (event) => {
		const newValue = event.currentTarget.value as Size

		if (newValue === sizeValue) return

		domain.setSize(newValue)
	}

	return {
		handleSelectChange,
		sizeValue,
		sizeOptions,
		translations,
	}
}
