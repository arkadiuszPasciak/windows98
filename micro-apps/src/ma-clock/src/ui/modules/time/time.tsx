import { observer } from "mobx-react-lite"
import { DSText } from "@windows98/design-system"
import { useTime } from "./use-time.hook"

export const Time = observer(() => {
	const { time } = useTime()

	return time && (
		<DSText
			id="time-short"
			text={time}
		/>
	)
})
