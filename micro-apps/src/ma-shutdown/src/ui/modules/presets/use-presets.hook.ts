import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { EShutdownPresets } from "../../../domain/models"
import { useShutdown } from "../../hooks"

export const usePresets = () => {
	const { t } = useTranslation()
	const { shutdownDomain } = useShutdown()
	const [selectedPreset, setSelectedPreset] = useState<EShutdownPresets>(
		shutdownDomain.preset,
	)

	const presets = useMemo(() => {
		return [
			{
				preset: EShutdownPresets.SHUTDOWN,
				content: t("ma-shutdown.shutdown"),
				id: "ma-shutdown-preset-shutdowns",
			},
			{
				preset: EShutdownPresets.RESTART,
				content: t("ma-shutdown.restart"),
				id: "ma-shutdown-preset-restart",
			},
		]
	}, [t])

	const setPreset = (preset: EShutdownPresets): void => {
		shutdownDomain.changePreset(preset)
		setSelectedPreset(preset)
	}

	return {
		presets,
		setPreset,
		selectedPreset,
	}
}
