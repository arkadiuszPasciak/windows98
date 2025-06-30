import { MFRunner } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useRunner } from "./use-runner.hook"

export const Runner: FunctionComponent = () => {
	const { onCloseProgram, onRunProgram, searchProgramsList } = useRunner()

	return (
		<MFRunner
			onCloseProgram={onCloseProgram}
			onRunProgram={onRunProgram}
			programs={searchProgramsList}
		/>
	)
}
