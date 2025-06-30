import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useNotepad() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.NOTEPAD, false)
	}

	return {
		onCloseProgram,
	}
}
