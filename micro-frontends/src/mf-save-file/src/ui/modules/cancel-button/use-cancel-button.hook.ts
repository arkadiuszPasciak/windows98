import { useMemo } from "react"
import { useTranslation } from "react-i18next"

export const useCancelButton = () => {
	const { t } = useTranslation()

	const closeModal = (): void => {
		console.log("TODO: pass here a function from the config")
	}

	const translations = useMemo(() => {
		return {
			cancel: t("mf-save-file.cancel"),
		}
	}, [t])

	return {
		closeModal,
		translations,
	}
}
