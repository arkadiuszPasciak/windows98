import type { FunctionComponent } from "react"
import { saveFileDomain } from "../../domain/domains"
import { Config } from "../config"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"
import type { SaveFileViewProps } from "./save-file.types"

export const SaveFileView: FunctionComponent<SaveFileViewProps> = ({
	contentFile,
	fileTypes,
	onCloseModal,
}) => {
	return (
		<Config
			contentFile={contentFile}
			fileTypes={fileTypes}
			onCloseModal={onCloseModal}
		>
			<DomainContext.Provider value={saveFileDomain}>
				<Wrapper />
			</DomainContext.Provider>
		</Config>
	)
}
