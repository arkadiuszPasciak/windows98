import { useTranslation } from "react-i18next"
import { useConfig } from "../../hooks"

export const useModal = () => {
	const { t } = useTranslation()
	const { configContext } = useConfig()

	const translations = {
		title: t("mf-runner.modal.title"),
	}

	const onCloseProgram = () => {
		configContext.onCloseProgram()
	}

	return {
		translations,
		onCloseProgram,
	}
}
