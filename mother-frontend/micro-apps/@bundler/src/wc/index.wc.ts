import r2wc from "@r2wc/react-to-web-component"
import { CalendarView } from '../../../calendar/src/ui/views/calendar.view'

const MACalendar = r2wc(CalendarView)

customElements.define("ma-calendar", MACalendar)

export default MACalendar
