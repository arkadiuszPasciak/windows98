import { notepadDomain } from "../../domain/domains"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"

export const NotepadView = () => {
	return (
		<DomainContext.Provider value={notepadDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
