import React from "react"
import ReactDOM from "react-dom/client"
import "@windows98/design-system/base.config.css"
import "@windows98/design-system/variables.config.css"
import { CalendarView } from "../../calendar/src/ui/views/calendar.view"
import i18nInit from "@windows98/i18n/configs/react.config"

i18nInit().then(() => {
	ReactDOM.createRoot(document.getElementById("root")!).render(
		<React.StrictMode>
			<React.StrictMode>
				<CalendarView />
			</React.StrictMode>,
		</React.StrictMode>,
	)
})
