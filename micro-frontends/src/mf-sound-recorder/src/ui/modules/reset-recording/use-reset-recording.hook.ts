import { useTranslation } from "react-i18next"
import { useDomain } from "../../hooks"

export function useResetRecording() {
	const { domain } = useDomain()
	const { t } = useTranslation()

	const resetRecording = (): void => {
		domain.reset()
	}

	const isDisabled =
		domain.recordingState === "idle" || domain.recordingState === "recording"

	const translations = {
		buttonName: t("mf-sound-recorder.reset-recording.button-name"),
	}

	return {
		resetRecording,
		isDisabled,
		translations,
	}
}
