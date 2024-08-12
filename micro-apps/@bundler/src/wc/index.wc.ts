import r2wc from "@r2wc/react-to-web-component"
import i18nInit from "@windows98/i18n/configs/react.config"
import { CalculatorView } from "../../../src/ma-calculator/src/ui/views"
import { CalendarView } from "../../../src/ma-calendar/src/ui/views/calendar.view"
import { TimezoneView } from "../../../src/ma-timezone/src/ui/views/timezone.view"
import { TimerView } from '../../../src/ma-timer/src/ui/views'

const MACalculator = r2wc(CalculatorView)
customElements.define("ma-calculator", MACalculator)

const MACalendar = r2wc(CalendarView)
customElements.define("ma-calendar", MACalendar)

const MATimer = r2wc(TimerView)
customElements.define("ma-timer", MATimer)

const MATimezone = r2wc(TimezoneView)
customElements.define("ma-timezone", MATimezone)

i18nInit()
