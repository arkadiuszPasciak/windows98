import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper/wrapper"
import { timezoneService } from "../../domain/services/timezone.service"

export const TimezoneView = () => {
	return (
		<DomainContext.Provider value={timezoneService}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
