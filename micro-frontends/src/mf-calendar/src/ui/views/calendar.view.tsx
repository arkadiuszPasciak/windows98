import { calendarDomain } from "../../domain/domains"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper/wrapper"

export const CalendarView = () => {
	return (
		<DomainContext.Provider value={calendarDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
