import React from "react"
import ReactDOM from "react-dom/client"
import "@windows98/design-system/base.config.css"
import "@windows98/design-system/variables.config.css"
import i18nInit from "@windows98/i18n/configs/react.config"
import type { Maybe } from "@windows98/toolkit"
import { AudioButtonView } from "../../src/mf-audio-button/src/ui/views"
import { MFCalculator } from "../../src/mf-calculator/src/ui/views"
import { CalendarView } from "../../src/mf-calendar/src/ui/views/calendar.view"
import { ClockView } from "../../src/mf-clock/src/ui/views"
import { LanguageManagerView } from "../../src/mf-language-manager/src/ui/views"
import { NavigationView } from "../../src/mf-navigation/src/ui/views"
import { NotepadView } from "../../src/mf-notepad/src/ui/views"
import { ShutdownView } from "../../src/mf-shutdown/src/ui/views"
import { MFSystemInformation } from "../../src/mf-system-information/src/ui/views/system-information"
import { ThemeManagerView } from "../../src/mf-theme-manager/src/ui/views"
import { TimerView } from "../../src/mf-timer/src/ui/views"
import { TimezoneView } from "../../src/mf-timezone/src/ui/views"

i18nInit().then(() => {
	const root: Maybe<HTMLElement> = document.getElementById("root")

	if (!root) return

	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<MFSystemInformation />
			<NotepadView onCloseProgram={() => console.log("notepad is closed!")} />
			<CalendarView />
			<TimezoneView />
			<MFCalculator
				onCloseProgram={() => console.log("calculator is closed!")}
			/>
			<TimerView />
			<ShutdownView />
			<ThemeManagerView
				themes={["dark", "light"]}
				onChangeTheme={(theme) => console.log(`this is ${theme}`)}
			/>
			<LanguageManagerView
				languages={["de", "en", "pl"]}
				onChangeLanguage={(language) => console.log(`this is ${language}`)}
			/>
			<NavigationView>
				<AudioButtonView />
				<ClockView />
			</NavigationView>
		</React.StrictMode>,
	)
})
