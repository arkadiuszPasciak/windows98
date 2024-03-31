import React from "react"
import ReactDOM from "react-dom/client"
import { TestComponent } from "./test"
import "../../src/styles/configs/reset.config.css"
import "../../src/styles/configs/base.config.css"
import "../build/styles/variables.config.css"
import "../../@styles/src/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<TestComponent />
	</React.StrictMode>,
)
