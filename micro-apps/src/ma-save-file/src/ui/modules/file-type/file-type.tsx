import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useFileType } from "./use-file-type.hook"

export const FileType: FunctionComponent = observer(() => {
	const { fileType, fileTypes, handleSelectChange, translations } =
		useFileType()

	return (
		<DSSelect
			id="ma-notepad-save-as-type"
			labelName={translations.saveAs}
			modelValue={fileType}
			options={fileTypes.text}
			onSelect={handleSelectChange}
			// TODO: Add wrapperLayoyut prop
			// wrapperLayout="horizontal"
		/>
	)
})
