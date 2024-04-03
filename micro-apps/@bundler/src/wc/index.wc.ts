import r2wc from "@r2wc/react-to-web-component"
import i18nInit from "@windows98/i18n/configs/react.config"
import { CalendarView } from "../../../src/ma-calendar/src/ui/views/calendar.view"

const MACalendar = r2wc(CalendarView)
customElements.define("ma-calendar", MACalendar)

i18nInit()
