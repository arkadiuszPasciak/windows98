import { TimerDomainContext } from "../context/domain.context"
import { timerDomain } from "../../domain/domains"
import { Wrapper } from "../modules/wrapper"

// TODO: Add the modal to the timer view
export const TimerView = () => {
	return (
		<TimerDomainContext.Provider value={timerDomain}>
			<Wrapper />
		</TimerDomainContext.Provider>
	)
}
