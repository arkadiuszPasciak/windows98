import { MFTimer } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useTimer } from "./use-timer.hook"

export const Timer: FunctionComponent = () => {
	const { onCloseProgram } = useTimer()

	return <MFTimer onCloseProgram={onCloseProgram} />
}
