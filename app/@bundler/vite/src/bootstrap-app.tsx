import i18nInit from "@windows98/i18n/configs/react.config"
import type { Maybe } from "@windows98/toolkit"
import React from "react"
import ReactDOM from "react-dom/client"
import { MainContainer } from "../../../src/presentation/container/main"

export async function bootstrapApp() {
	await i18nInit()

	const root: Maybe<HTMLElement> = document.getElementById("root")

	if (!root) {
		throw new Error("Root element not found")
	}

	ReactDOM.createRoot(root).render(<MainContainer />)
}
