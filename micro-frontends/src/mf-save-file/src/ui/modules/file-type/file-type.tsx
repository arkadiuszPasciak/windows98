import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useFileType } from "./use-file-type.hook"

export const FileType: FunctionComponent = observer(() => {
	const { fileType, fileTypeOptions, setFileType, translations } = useFileType()

	return (
		fileType && (
			<DSSelect
				id="mf-save-file-file-type"
				labelName={translations.saveAs}
				modelValue={fileType}
				options={fileTypeOptions}
				onSelect={setFileType}
				wrapperLayout="horizontal"
			/>
		)
	)
})
