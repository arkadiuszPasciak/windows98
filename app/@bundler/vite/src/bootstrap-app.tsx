import i18n from "@windows98/i18n/configs/react.config"
import type { Maybe } from "@windows98/toolkit"
import React from "react"
import ReactDOM from "react-dom/client"
import { I18nextProvider } from "react-i18next"
import { MainContainer } from "../../../src/presentation/containers/main"

export async function bootstrapApp() {
	const root: Maybe<HTMLElement> = document.getElementById("root")

	if (!root) {
		throw new Error("Root element not found")
	}

	ReactDOM.createRoot(root).render(
		<I18nextProvider i18n={i18n}>
			<MainContainer />
		</I18nextProvider>,
	)
}
