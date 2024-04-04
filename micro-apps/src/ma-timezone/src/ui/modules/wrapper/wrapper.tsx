import { observer } from 'mobx-react-lite'
import { DSFrame } from "@windows98/design-system"
import { useWrapper } from "./use-wrapper.hook"
import { TimezoneSwitcher } from '../timezone-switcher/timezone-switcher'

export const Wrapper = observer(() => {
	const { title } = useWrapper()

	return (
		<DSFrame
			id="calculator"
			title={title}
		>
			<TimezoneSwitcher />
		</DSFrame>
	)
})
