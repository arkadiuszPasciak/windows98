import React from "react"
import ReactDOM from "react-dom/client"
import { TestComponent } from "./test"
import "../../src/styles/configs/reset.config.css"
import "../../src/styles/configs/base.config.css"
import "../build/styles/variables.config.css"
import type { Maybe } from "@windows98/toolkit"

const root: Maybe<HTMLElement> = document.getElementById("root")

if (!root) {
	throw new Error("Root element not found")
}

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<TestComponent />
	</React.StrictMode>,
)
