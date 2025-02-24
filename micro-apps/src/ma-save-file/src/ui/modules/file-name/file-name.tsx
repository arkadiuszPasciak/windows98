import { DSInput } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useFileName } from "./use-file-name.hook"

export const FileName: FunctionComponent = observer(() => {
	const { setFileName, translations } = useFileName()

	return (
		<DSInput
			id="ma-notepad-save-file-name"
			initialValue={translations.untitled}
			labelName={translations.fileName}
			// TODO: Fix wrapperLayout prop
			// TODO: Fix onChange prop with value
			wrapperLayout="horizontal"
			onChange={(event) => setFileName(event)}
		/>
	)
})
