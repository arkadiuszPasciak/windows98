import React from "react"
import ReactDOM from "react-dom/client"
import "@windows98/design-system/base.config.css"
import "@windows98/design-system/variables.config.css"
import i18nInit from "@windows98/i18n/configs/react.config"
import type { Maybe } from "@windows98/toolkit"
import { MFTimer } from "../../src/mf-timer/src/ui/views"

i18nInit().then(() => {
	const root: Maybe<HTMLElement> = document.getElementById("root")

	if (!root) return

	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<MFTimer onCloseProgram={() => console.log("timer is closed!")} />
		</React.StrictMode>,
	)
})
