import type { Maybe } from "@windows98/toolkit"
import React from "react"
import ReactDOM from "react-dom/client"
import { TestComponent } from "./test"
import "../index.css"

const root: Maybe<HTMLElement> = document.getElementById("root")

if (!root) {
	throw new Error("Root element not found")
}

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<TestComponent />
	</React.StrictMode>,
)
