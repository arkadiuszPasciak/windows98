import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useShutdown() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.SHUTDOWN, false)
	}

	return {
		onCloseProgram,
	}
}
