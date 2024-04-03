import { DSFrame } from "@windows98/design-system"
import { useWrapper } from "./use-wrapper.hook"

export const Wrapper = () => {
	const { title } = useWrapper()

	return (
		<DSFrame
			id="calculator"
			title={title}
		>
			<p>ma-timezone</p>
		</DSFrame>
	)
}
