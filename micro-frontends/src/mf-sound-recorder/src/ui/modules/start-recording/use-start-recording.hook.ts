import { useTranslation } from "react-i18next"
import { useDomain } from "../../hooks"

export function useStartRecording() {
	const { domain } = useDomain()
	const { t } = useTranslation()

	const startRecording = (): void => {
		domain.startRecording()
	}

	const isDisabled =
		domain.recordingState === "recording" || domain.recordingState === "stopped"

	const translations = {
		buttonName: t("mf-sound-recorder.start-recording.button-name"),
	}

	return {
		startRecording,
		isDisabled,
		translations,
	}
}
