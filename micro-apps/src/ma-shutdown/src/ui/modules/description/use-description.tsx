import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function useDescription() {
	const { t } = useTranslation()

	const translations = useMemo(() => {
		return {
			description: t("ma-shutdown.description"),
		}
	}, [t])

	return {
		translations,
	}
}
