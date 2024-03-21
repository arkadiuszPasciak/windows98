import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper/wrapper"
import { calendarService } from "../../domain/services/calendar.service"

export const CalendarView = () => {
	return (
		<DomainContext.Provider value={calendarService}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
