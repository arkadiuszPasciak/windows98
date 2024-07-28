import { Controller } from '../controller'
import { Presets } from '../presets'
import { Screen } from "../screen"
import type { FunctionComponent } from "react"

export const Wrapper: FunctionComponent = () => {
	return (
		<div
			data-testid="ma-timer-wrapper"
		>
			<Presets />
			<Controller />
			<Screen />
		</div>
	)
}