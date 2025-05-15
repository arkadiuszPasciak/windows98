import { DSInput } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useFileName } from "./use-file-name.hook"

export const FileName: FunctionComponent = observer(() => {
	const { setFileName, translations } = useFileName()

	return (
		<DSInput
			id="mf-notepad-save-file-name"
			initialValue={translations.untitled}
			labelName={translations.fileName}
			wrapperLayout="horizontal"
			onChange={setFileName}
		/>
	)
})
