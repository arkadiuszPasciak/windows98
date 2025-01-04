import React from "react"
import ReactDOM from "react-dom/client"
import "@windows98/design-system/base.config.css"
import "@windows98/design-system/variables.config.css"
import i18nInit from "@windows98/i18n/configs/react.config"
import type { Maybe } from "@windows98/toolkit"
import { CalculatorView } from "../../src/ma-calculator/src/ui/views"
import { CalendarView } from "../../src/ma-calendar/src/ui/views/calendar.view"
import { ClockView } from "../../src/ma-clock/src/ui/views"
import { NavigationView } from "../../src/ma-navigation/src/ui/views"
import { ShutdownView } from "../../src/ma-shutdown/src/ui/views"
import { TimerView } from "../../src/ma-timer/src/ui/views"
import { TimezoneView } from "../../src/ma-timezone/src/ui/views"

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
			<NavigationView>
				<ClockView />
			</NavigationView>
		</React.StrictMode>,
	)
})
