import { MSProgramManager } from "@windows98/micro-services"
import { computed, ref } from "vue"
import { defaultPrograms } from "../configs"
import type { AppPrograms } from "../types"

const msProgramManager = new MSProgramManager<AppPrograms>(defaultPrograms)
const programState = ref(msProgramManager.programs)

msProgramManager.observerHelper.subscribe((newPrograms) => {
	programState.value = { ...newPrograms }
})

export function useProgramManager() {
	const runProgram = (program: keyof AppPrograms, value: boolean): void => {
		msProgramManager.runProgram(program, value)
	}

	const programs = computed(() => programState.value)

	return {
		runProgram,
		programs,
	}
}
