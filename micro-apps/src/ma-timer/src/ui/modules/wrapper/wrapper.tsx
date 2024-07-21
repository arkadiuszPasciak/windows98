import { Controller } from '../controller/controller'
import { Screen } from "../screen"
import type { FunctionComponent } from "react"

export const Wrapper: FunctionComponent = () => {
	return (
		<div
			data-testid="ma-timer-wrapper"
		>
			<Controller />
			<Screen />
		</div>
	)
}
