import { DSFrame } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import { TimezoneSwitcher } from "../timezone-switcher"
import { useWrapper } from "./use-wrapper.hook"

export const Wrapper = observer(() => {
	const { title } = useWrapper()

	return (
		<DSFrame
			id="timezone"
			title={title}
		>
			<TimezoneSwitcher />
		</DSFrame>
	)
})
