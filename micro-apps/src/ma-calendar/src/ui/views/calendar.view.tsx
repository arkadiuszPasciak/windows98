import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper/wrapper"
import { calendarDomain } from "../../domain/domains"

export const CalendarView = () => {
	return (
		<DomainContext.Provider value={calendarDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
