import { defineProject, mergeConfig } from "vitest/config"
import sharedConfig from "@windows98/configs/vitest/shared"

export default mergeConfig(
	sharedConfig,
	defineProject({/* here custom configs */ })
)
