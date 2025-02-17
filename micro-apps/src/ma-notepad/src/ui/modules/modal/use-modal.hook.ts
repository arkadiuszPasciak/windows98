import { useMemo } from "react"
import { useTranslation } from "react-i18next"

export const useModal = () => {
	const { t } = useTranslation()

	const translations = useMemo(() => {
		return {
			text: t("ma-notepad.title"),
		}
	}, [t])

	return {
		translations,
	}
}
