import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useTicTacToe() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.TIC_TAC_TOE, false)
	}

	return {
		onCloseProgram,
	}
}
