import { useProgramManager } from "../../../application/hooks"
import { startMenuConfig } from "../../../infrastructure/configs"
import type { Program } from "../../../infrastructure/types"

export function useStartMenu() {
	const { runProgram } = useProgramManager()

	const onRunProgram = (program: string) => {
		runProgram(program as Program, true)
	}

	return { onRunProgram, programs: startMenuConfig }
}
