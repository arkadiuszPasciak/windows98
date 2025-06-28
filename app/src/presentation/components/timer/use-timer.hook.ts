import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useTimer() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.TIMER, false)
	}

	return {
		onCloseProgram,
	}
}
