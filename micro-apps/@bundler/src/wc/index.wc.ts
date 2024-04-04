import r2wc from "@r2wc/react-to-web-component"
import i18nInit from "@windows98/i18n/configs/react.config"
import { CalendarView } from "../../../src/ma-calendar/src/ui/views/calendar.view"
import { TimezoneView } from "../../../src/ma-timezone/src/ui/views/timezone.view"

const MACalendar = r2wc(CalendarView)
customElements.define("ma-calendar", MACalendar)

const MATimezone = r2wc(TimezoneView)
customElements.define("ma-timezone", MATimezone)

i18nInit()
