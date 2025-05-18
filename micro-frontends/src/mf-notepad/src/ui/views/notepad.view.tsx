import type { FunctionComponent } from "react"
import { notepadDomain } from "../../domain/domains"
import { Config } from "../config"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"
import type { NotepadViewProps } from "./notepad.types"

export const NotepadView: FunctionComponent<NotepadViewProps> = ({
	onCloseProgram,
}) => {
	return (
		<Config onCloseProgram={onCloseProgram}>
			<DomainContext.Provider value={notepadDomain}>
				<Wrapper />
			</DomainContext.Provider>
		</Config>
	)
}
