import { useTranslation } from "react-i18next"
import type { ColorType } from "../../../domain/models"
import { useColorGenerator } from "../../hooks"

const colors: ColorType[] = ["cmyk", "hex", "hsl", "hsv", "rgb"]

export const useColorInput = () => {
	const { t } = useTranslation()
	const { domain } = useColorGenerator()

	const translations = {
		copy: t("mf-color-generator.copy"),
	}

	const copyColor = async (color: ColorType) => {
		await domain.copyColor(color)
	}

	const colorObjects = colors.map((color) => ({
		id: color,
		labelName: color.toUpperCase(),
		value: domain.formattedColor[color],
		copyColor: () => copyColor(color),
	}))

	return {
		colorObjects,
		translations,
	}
}
