import { useTranslation } from "react-i18next"
import type { UsePanelItem } from "./panel-item.type"

export function usePanelItem(id: UsePanelItem) {
	const { t } = useTranslation()

	const translations = {
		name: t(`mf-start-menu.programs.${id}`),
	}

	return {
		translations,
	}
}
