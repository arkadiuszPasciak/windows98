import { useTranslation } from "react-i18next"
import type { UseMenuItem } from "./menu-item.type"

export function useMenuItem({ id }: UseMenuItem) {
	const { t } = useTranslation()

	const translations = {
		name: t(`mf-start-menu.programs.${id}`),
	}

	return {
		translations,
	}
}
