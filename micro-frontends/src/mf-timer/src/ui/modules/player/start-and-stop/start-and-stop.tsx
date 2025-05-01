import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useStartAndStop } from "./use-start-and-stop.hook"

export const StartAndStop: FunctionComponent = observer(() => {
	const { disabled, onClick, text } = useStartAndStop()

	return (
		<DSButton
			id="mf-timer-player-start-and-stop"
			disabled={disabled}
			onClick={onClick}
			text={text}
		/>
	)
})
