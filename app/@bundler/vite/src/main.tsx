import React from "react"
import ReactDOM from "react-dom/client"
import "@windows98/design-system/base.config.css"
import "@windows98/design-system/variables.config.css"
import i18nInit from "@windows98/i18n/configs/react.config"
import type { Maybe } from "@windows98/toolkit"
import { MainContainer } from "../../../src/presentations/container/main"

const root: Maybe<HTMLElement> = document.getElementById("root")

if (!root) {
	throw new Error("")
}

i18nInit()

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<MainContainer />
	</React.StrictMode>,
)
