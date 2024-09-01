import { useMemo } from "react"
import { useTranslation } from "react-i18next"

export const useCancel = () => {
	const { t } = useTranslation()
	const translations = useMemo(() => {
		return {
			text: t("ma-shutdown.cancel"),
		}
	}, [t])

	// @TODO: Implement onClick logic when I prepare program management

	return {
		translations,
	}
}
