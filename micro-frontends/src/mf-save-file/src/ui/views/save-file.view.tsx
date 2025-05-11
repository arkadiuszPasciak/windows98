import { saveFileDomain } from "../../domain/domains"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"

export const SaveFileView = () => {
	return (
		<DomainContext.Provider value={saveFileDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
