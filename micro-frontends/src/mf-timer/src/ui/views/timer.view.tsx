import { timerDomain } from "../../domain/domains"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"

// TODO: Add the modal to the timer view
export const TimerView = () => {
	return (
		<DomainContext.Provider value={timerDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
