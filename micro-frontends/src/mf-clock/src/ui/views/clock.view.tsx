import { clockDomain } from "../../domain/domains"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"

export const ClockView = () => {
	return (
		<DomainContext.Provider value={clockDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
