import { useCallback, useEffect, useState } from "react"
import { ProgramManagerService } from "../../infrastructure/services"
import type { Program, ProgramManager } from "../../infrastructure/types"

export default function useProgramManager() {
	const [programs, setPrograms] = useState<ProgramManager>(
		ProgramManagerService.programs,
	)

	useEffect(() => {
		const subscription = ProgramManagerService.observerHelper.subscribe(
			(newPrograms: ProgramManager) => {
				setPrograms({ ...newPrograms })
			},
		)
		return typeof subscription === "function" ? subscription : undefined
	}, [])

	const runProgram = useCallback((program: Program, value: boolean) => {
		ProgramManagerService.runProgram(program, value)
	}, [])

	return {
		runProgram,
		programs,
	}
}
