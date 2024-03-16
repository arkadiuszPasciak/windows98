import { defineProject, mergeConfig } from "vitest/config"
import sharedConfig from "@windows98/configs/vitest/shared"
import tsconfigPaths from "vite-tsconfig-paths"

export default mergeConfig(
	sharedConfig,
	defineProject({
		plugins: [tsconfigPaths({ loose: true })],
	})
)
