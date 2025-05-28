import type { FunctionComponent } from "react"
import { CalendarView as MFCalendar } from "../../../../../../mf-calendar/src/ui/views/calendar.view"
import { TimezoneView as MFTimezone } from "../../../../../../mf-timezone/src/ui/views"

export const DateAndTimeTab: FunctionComponent = () => {
	return (
		<div data-testid="mf-settings-date-and-time-tab">
			<MFCalendar />
			<MFTimezone />
		</div>
	)
}
