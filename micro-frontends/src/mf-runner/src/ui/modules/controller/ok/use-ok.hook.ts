import { useTranslation } from "react-i18next"
import { useConfig, useDomain } from "../../../hooks"

export const useOk = () => {
	const { t } = useTranslation()
	const { configContext } = useConfig()
	const { runnerDomain } = useDomain()

	const translations = {
		text: t("mf-runner.controller.ok"),
	}

	const onClick = (): void => {
		const result = runnerDomain.runProgram(configContext.programs)

		if (result) {
			configContext.onRunProgram(result)
		}
	}

	const isDisabled = runnerDomain.programName.length === 0

	return {
		onClick,
		translations,
		isDisabled,
	}
}
