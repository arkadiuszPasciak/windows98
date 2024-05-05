import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper/wrapper"
import { clockService } from "../../domain/services/clock.service"

export const ClockView = () => {
	return (
		<DomainContext.Provider value={clockService}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
