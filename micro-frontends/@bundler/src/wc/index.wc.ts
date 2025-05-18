import r2wc from "@r2wc/react-to-web-component"
import i18nInit from "@windows98/i18n/configs/react.config"
import { AudioButtonView } from "../../../src/mf-audio-button/src/ui/views"
import { CalculatorView } from "../../../src/mf-calculator/src/ui/views"
import { CalendarView } from "../../../src/mf-calendar/src/ui/views/calendar.view"
import { ClockView } from "../../../src/mf-clock/src/ui/views"
import { NavigationView } from "../../../src/mf-navigation/src/ui/views"
import { NotepadView } from "../../../src/mf-notepad/src/ui/views"
import { PulpitViewWithMock } from "../../../src/mf-pulpit/src/ui/views"
import { ShutdownView } from "../../../src/mf-shutdown/src/ui/views"
import { TimerView } from "../../../src/mf-timer/src/ui/views"
import { TimezoneView } from "../../../src/mf-timezone/src/ui/views"

const MFAudio = r2wc(AudioButtonView)
customElements.define("mf-audio-button", MFAudio)

const MFCalculator = r2wc(CalculatorView)
customElements.define("mf-calculator", MFCalculator)

const MFCalendar = r2wc(CalendarView)
customElements.define("mf-calendar", MFCalendar)

const MFClock = r2wc(ClockView)
customElements.define("mf-clock", MFClock)

const MFNavigation = r2wc(NavigationView)
customElements.define("mf-navigation", MFNavigation)

const MFNotepad = r2wc(NotepadView, {
	// @ts-ignore TODO: I don't know why error
	props: {
		onCloseProgram: "function",
	},
})
customElements.define("mf-notepad", MFNotepad)

const MFPulpit = r2wc(PulpitViewWithMock)
customElements.define("mf-pulpit", MFPulpit)

const MFShutdown = r2wc(ShutdownView)
customElements.define("mf-shutdown", MFShutdown)

const MFTimer = r2wc(TimerView)
customElements.define("mf-timer", MFTimer)

const MFTimezone = r2wc(TimezoneView)
customElements.define("mf-timezone", MFTimezone)

i18nInit()
