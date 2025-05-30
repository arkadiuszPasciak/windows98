import { useTranslation } from "react-i18next"
import { useConfig } from "../../../hooks"

export const useCancel = () => {
	const { t } = useTranslation()
	const { configContext } = useConfig()

	const translations = {
		text: t("mf-runner.controller.cancel"),
	}

	const onCancel = (): void => {
		configContext.onCloseProgram()
	}

	return {
		onCancel,
		translations,
	}
}
