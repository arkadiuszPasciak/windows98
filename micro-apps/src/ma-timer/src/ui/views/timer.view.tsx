import { TimerDomainContext } from "../context/domain.context"
import { TimerDomainRoot } from "../../domain/domains"

// TODO: Add the modal to the timer view
export const TimerView = () => {
	return (
		<TimerDomainContext.Provider value={TimerDomainRoot}>
			<p>123</p>
		</TimerDomainContext.Provider>
	)
}
