import { useProgramManager } from "../../../application/hooks"
import { searchProgramsList } from "../../../infrastructure/configs"
import { Program } from "../../../infrastructure/types"

export function useRunner() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.RUNNER, false)
	}

	// TODO: Implement generic type in ms-program-manager
	const onRunProgram = (programName: string) => {
		runProgram(programName as Program, true)
		onCloseProgram()
	}

	return {
		onCloseProgram,
		onRunProgram,
		searchProgramsList,
	}
}
