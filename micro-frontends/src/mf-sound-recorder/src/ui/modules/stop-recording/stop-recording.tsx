import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useStopRecording } from "./use-stop-recording.hook"

export const StopRecording: FunctionComponent = observer(() => {
	const { stopRecording, isDisabled, translations } = useStopRecording()

	return (
		<DSButton
			id="mf-sound-recorder-stop-recording"
			onClick={stopRecording}
			text={translations.buttonName}
			disabled={isDisabled}
		/>
	)
})
