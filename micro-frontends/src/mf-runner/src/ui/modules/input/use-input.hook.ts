import type { ReactEventHandler } from "react"
import { useTranslation } from "react-i18next"
import { useDomain } from "../../hooks"

export const useInput = () => {
	const { t } = useTranslation()
	const { runnerDomain } = useDomain()

	const setProgramName: ReactEventHandler<HTMLInputElement> = (event) => {
		runnerDomain.setProgramName(event.currentTarget.value)
	}

	const translations = {
		label: t("mf-runner.input.label"),
		placeholder: t("mf-runner.input.placeholder"),
	}

	return {
		setProgramName,
		translations,
	}
}
