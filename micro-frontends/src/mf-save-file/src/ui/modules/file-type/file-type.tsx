import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useFileType } from "./use-file-type.hook"

export const FileType: FunctionComponent = observer(() => {
	const { fileType, fileTypes, setFileType, translations } = useFileType()

	return (
		fileType && (
			<DSSelect
				id="mf-notepad-save-as-type"
				labelName={translations.saveAs}
				modelValue={fileType}
				options={fileTypes.text}
				onSelect={setFileType}
				wrapperLayout="horizontal"
			/>
		)
	)
})
