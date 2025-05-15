import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useSaveButton } from "./use-save-button.hook"

export const SaveButton: FunctionComponent = observer(() => {
	const { saveFile, translations } = useSaveButton()

	return (
		<DSButton
			id="mf-save-file-save"
			onClick={saveFile}
			text={translations.save}
		/>
	)
})
