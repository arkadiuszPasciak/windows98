import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useCalculator() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.CALCULATOR, false)
	}

	return {
		onCloseProgram,
	}
}
