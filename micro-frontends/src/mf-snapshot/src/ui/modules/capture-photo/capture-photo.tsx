import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useCapturePhoto } from "./use-capture-photo.hook"

export const CapturePhoto: FunctionComponent = observer(() => {
	const { capturePhoto, isDisabled, translations } = useCapturePhoto()

	return (
		<DSButton
			id="mf-snapshot-capture-photo"
			text={translations.name}
			onClick={capturePhoto}
			disabled={isDisabled}
		/>
	)
})
