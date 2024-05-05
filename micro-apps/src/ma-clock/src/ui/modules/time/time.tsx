import { observer } from "mobx-react-lite"
// add styles
// import styles from "./week-days.module.scss"
import { DSText } from "@windows98/design-system"
import { useTime } from "./use-time.hook"

export const Time = observer(() => {
	const { time } = useTime()

	return time && (
		<DSText
			id="clock-time"
			text="test"
		/>
	)
})
