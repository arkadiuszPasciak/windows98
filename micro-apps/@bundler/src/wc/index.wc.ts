import r2wc from "@r2wc/react-to-web-component"
import i18nInit from "@windows98/i18n/configs/react.config"
import { AudioButtonView } from "../../../src/ma-audio-button/src/ui/views"
import { CalculatorView } from "../../../src/ma-calculator/src/ui/views"
import { CalendarView } from "../../../src/ma-calendar/src/ui/views/calendar.view"
import { ClockView } from "../../../src/ma-clock/src/ui/views"
import { NavigationView } from "../../../src/ma-navigation/src/ui/views"
import { PulpitViewWithMock } from "../../../src/ma-pulpit/src/ui/views"
import { ShutdownView } from "../../../src/ma-shutdown/src/ui/views"
import { TimerView } from "../../../src/ma-timer/src/ui/views"
import { TimezoneView } from "../../../src/ma-timezone/src/ui/views"

const MAAudio = r2wc(AudioButtonView)
customElements.define("ma-audio-button", MAAudio)

const MACalculator = r2wc(CalculatorView)
customElements.define("ma-calculator", MACalculator)

const MACalendar = r2wc(CalendarView)
customElements.define("ma-calendar", MACalendar)

const MAClock = r2wc(ClockView)
customElements.define("ma-clock", MAClock)

const MANavigation = r2wc(NavigationView)
customElements.define("ma-navigation", MANavigation)

const MAPulpit = r2wc(PulpitViewWithMock)
customElements.define("ma-pulpit", MAPulpit)

const MAShutdown = r2wc(ShutdownView)
customElements.define("ma-shutdown", MAShutdown)

const MATimer = r2wc(TimerView)
customElements.define("ma-timer", MATimer)

const MATimezone = r2wc(TimezoneView)
customElements.define("ma-timezone", MATimezone)

i18nInit()
