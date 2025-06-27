import { MSProgramManager } from "@windows98/micro-services"
import { programManagerConfig } from "../configs"
import type { ProgramManager } from "../types"

export const ProgramManagerService = new MSProgramManager<ProgramManager>(
	programManagerConfig,
)
