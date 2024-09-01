import { shutdownDomain } from "../../domain/domains"
import { DomainContext } from "../context"
import { Wrapper } from "../modules/wrapper"

export const shutdownView = () => {
	return (
		<DomainContext.Provider value={shutdownDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
