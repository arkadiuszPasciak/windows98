import { useTranslation } from "react-i18next"

export function usePulpit() {
	const { t } = useTranslation()

	return {
		t,
	}
}
