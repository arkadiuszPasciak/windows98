import { Time } from "../time/time"
import { useWrapper } from "./use-wrapper.hook"

export const Wrapper = (): JSX.Element => {
	useWrapper()

	return (
		<>
			<Time />
		</>
	)
}
