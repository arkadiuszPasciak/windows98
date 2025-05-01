import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { EShutdownPresets } from "../../../../domain/models"
import { useShutdown } from "../../../hooks"

export const useOk = () => {
	const { t } = useTranslation()
	const { shutdownDomain } = useShutdown()

	const translations = useMemo(() => {
		return {
			text: t("mf-shutdown.ok"),
		}
	}, [t])

	const onClick = (): void => {
		if (shutdownDomain.preset === EShutdownPresets.SHUTDOWN) {
			shutdownDomain.shutdownApplication()
		}

		if (shutdownDomain.preset === EShutdownPresets.RESTART) {
			shutdownDomain.restartApplication()
		}
	}

	return {
		onClick,
		translations,
	}
}
