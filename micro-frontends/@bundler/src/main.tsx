import React from "react"
import ReactDOM from "react-dom/client"
import "@windows98/design-system/base.config.css"
import "@windows98/design-system/variables.config.css"
import i18nInit from "@windows98/i18n/configs/react.config"
import type { Maybe } from "@windows98/toolkit"
import { AudioButtonView } from "../../src/mf-audio-button/src/ui/views"
import { CalculatorView } from "../../src/mf-calculator/src/ui/views"
import { CalendarView } from "../../src/mf-calendar/src/ui/views/calendar.view"
import { ClockView } from "../../src/mf-clock/src/ui/views"
import { NavigationView } from "../../src/mf-navigation/src/ui/views"
import { ShutdownView } from "../../src/mf-shutdown/src/ui/views"
import { ThemeManagerView } from "../../src/mf-theme-manager/src/ui/views"
import { TimerView } from "../../src/mf-timer/src/ui/views"
import { TimezoneView } from "../../src/mf-timezone/src/ui/views"

i18nInit().then(() => {
	const root: Maybe<HTMLElement> = document.getElementById("root")

	if (!root) return

	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<CalendarView />
			<TimezoneView />
			<CalculatorView />
			<TimerView />
			<ShutdownView />
			<ThemeManagerView
				themes={["dark", "light"]}
				onChangeTheme={(theme) => console.log(`this is ${theme}`)}
			/>
			<NavigationView>
				<AudioButtonView />
				<ClockView />
			</NavigationView>
		</React.StrictMode>,
	)
})
