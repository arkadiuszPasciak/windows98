import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useReset } from "./use-reset.hook"

export const Reset: FunctionComponent = observer(() => {
	const { disabled, onClick, text } = useReset()

	return (
		<DSButton
			id="ma-timer-player-reset"
			disabled={disabled}
			onClick={onClick}
			text={text}
		/>
	)
})
