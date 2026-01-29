import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useDownloadSound } from "./use-download-sound.hook"

export const DownloadSound: FunctionComponent = observer(() => {
	const { downloadSound, isDisabled, translations } = useDownloadSound()

	return (
		<DSButton
			id="mf-sound-recorder-download-sound"
			onClick={downloadSound}
			text={translations.buttonName}
			disabled={isDisabled}
		/>
	)
})
