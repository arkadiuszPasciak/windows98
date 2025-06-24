import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useConfig } from "../../../hooks"

export const useCancel = () => {
	const { t } = useTranslation()
	const { config } = useConfig()
	const translations = useMemo(() => {
		return {
			text: t("mf-shutdown.cancel"),
		}
	}, [t])

	return {
		translations,
		onCloseProgram: config.onCloseProgram,
	}
}
