import { useTranslation } from "react-i18next"
import { useDomain } from "../../hooks"

export function useStopRecording() {
	const { domain } = useDomain()
	const { t } = useTranslation()

	const stopRecording = (): void => {
		domain.stopRecording()
	}

	const isDisabled =
		domain.recordingState === "idle" || domain.recordingState === "stopped"

	const translations = {
		buttonName: t("mf-sound-recorder.stop-recording.button-name"),
	}

	return {
		stopRecording,
		isDisabled,
		translations,
	}
}
