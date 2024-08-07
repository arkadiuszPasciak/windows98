import React from "react"
import ReactDOM from "react-dom/client"
import "@windows98/design-system/base.config.css"
import "@windows98/design-system/variables.config.css"
import { CalendarView } from "../../src/ma-calendar/src/ui/views/calendar.view"
import i18nInit from "@windows98/i18n/configs/react.config"
import { TimezoneView } from '../../src/ma-timezone/src/ui/views/timezone.view'
import { CalculatorView } from '../../src/ma-calculator/src/ui/views'

i18nInit().then(() => {
	ReactDOM.createRoot(document.getElementById("root")!).render(
		<React.StrictMode>
			<React.StrictMode>
				<CalendarView />
				<TimezoneView />
				<CalculatorView />
			</React.StrictMode>,
		</React.StrictMode>,
	)
})
