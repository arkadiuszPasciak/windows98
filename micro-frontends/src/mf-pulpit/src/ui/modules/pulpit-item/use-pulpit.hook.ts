import { useTranslation } from "react-i18next"
import type { UsePulpitItem } from "./pulpit-item.types"

export function usePulpitItem({ name }: UsePulpitItem) {
	const { t } = useTranslation()

	const translatedName = t(`mf-pulpit.${name}`)

	return {
		translatedName,
	}
}
