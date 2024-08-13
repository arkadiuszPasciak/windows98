import { DomainContext } from "../context"
import { Wrapper } from "../modules/wrapper"
import { timezoneDomain } from "../../domain/domains"

export const TimezoneView = () => {
	return (
		<DomainContext.Provider value={timezoneDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
