import { audioButtonDomain } from "../../domain/domains"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"

export const AudioButtonView = () => {
	return (
		<DomainContext.Provider value={audioButtonDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
