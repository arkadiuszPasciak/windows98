import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useResetRecording } from "./use-reset-recording.hook"

export const ResetRecording: FunctionComponent = observer(() => {
	const { resetRecording, isDisabled, translations } = useResetRecording()

	return (
		<DSButton
			id="mf-sound-recorder-reset-recording"
			onClick={resetRecording}
			text={translations.buttonName}
			disabled={isDisabled}
		/>
	)
})
