import sharedConfig from "@windows98/configs/vitest/shared"
import { defineProject, mergeConfig } from "vitest/config"

export default mergeConfig(
	sharedConfig,
	defineProject({
		/* here custom configs */
	}),
)
