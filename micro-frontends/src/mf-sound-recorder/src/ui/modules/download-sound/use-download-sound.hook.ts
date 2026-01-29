import { useTranslation } from "react-i18next"
import { useDomain } from "../../hooks"

export function useDownloadSound() {
	const { domain } = useDomain()
	const { t } = useTranslation()

	const downloadSound = () => {
		domain.downloadRecordedSound()
	}

	const isDisabled =
		domain.recordingState === "idle" || domain.recordingState === "recording"

	const translations = {
		buttonName: t("mf-sound-recorder.download-sound.button-name"),
	}

	return {
		downloadSound,
		isDisabled,
		translations,
	}
}
