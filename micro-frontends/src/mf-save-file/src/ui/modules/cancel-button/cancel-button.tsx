import { DSButton } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { useCancelButton } from "./use-cancel-button.hook"

export const CancelButton: FunctionComponent = () => {
	const { closeModal, translations } = useCancelButton()

	return (
		<DSButton
			id="mf-save-file-cancel"
			onClick={closeModal}
			text={translations.cancel}
		/>
	)
}
