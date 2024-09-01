import { Controller } from "../controller"
import { Description } from "../description"
import { Presets } from "../presets"

export const Wrapper = () => {
	return (
		<div>
			<Description />
			<Presets />
			<Controller />
		</div>
	)
}
