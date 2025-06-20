import type { ReactEventHandler } from "react"
import { useTranslation } from "react-i18next"
import { useStarterDomain } from "../../../hooks"

export const useEnterYourName = () => {
	const { t } = useTranslation()
	const { starterDomain } = useStarterDomain()

	const setPlayerName: ReactEventHandler<HTMLInputElement> = (event) => {
		starterDomain.setPlayerName(event.currentTarget.value)
	}

	const translations = {
		label: t("mf-tic-tac-toe.starter.enter-your-name"),
		placeholder: t("mf-tic-tac-toe.starter.default-player"),
	}

	return {
		setPlayerName,
		translations,
	}
}
