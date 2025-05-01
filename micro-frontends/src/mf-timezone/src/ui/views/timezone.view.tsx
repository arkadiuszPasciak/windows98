import { timezoneDomain } from "../../domain/domains"
import { DomainContext } from "../context"
import { Wrapper } from "../modules/wrapper"

export const TimezoneView = () => {
	return (
		<DomainContext.Provider value={timezoneDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
