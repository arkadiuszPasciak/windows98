import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useStartRecording } from "./use-start-recording.hook"

export const StartRecording: FunctionComponent = observer(() => {
	const { startRecording, isDisabled, translations } = useStartRecording()

	return (
		<DSButton
			id="mf-sound-recorder-start-recording"
			onClick={startRecording}
			text={translations.buttonName}
			disabled={isDisabled}
		/>
	)
})
