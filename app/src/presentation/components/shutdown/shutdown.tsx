import { MFShutdown } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useShutdown } from "./use-shutdown.hook"

export const Shutdown: FunctionComponent = () => {
	const { onCloseProgram } = useShutdown()

	return <MFShutdown onCloseProgram={onCloseProgram} />
}
