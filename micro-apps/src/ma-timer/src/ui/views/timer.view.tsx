import { TimerDomainContext } from "../context/domain.context"
import { TimerDomainRoot } from "../../domain/domains"
import { Wrapper } from "../modules/wrapper"

// TODO: Add the modal to the timer view
export const TimerView = () => {
	return (
		<TimerDomainContext.Provider value={TimerDomainRoot}>
			<Wrapper />
		</TimerDomainContext.Provider>
	)
}
