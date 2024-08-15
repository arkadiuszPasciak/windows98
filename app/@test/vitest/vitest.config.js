import sharedConfig from "@windows98/configs/vitest/shared"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineProject, mergeConfig } from "vitest/config"

export default mergeConfig(
	sharedConfig,
	defineProject({
		plugins: [tsconfigPaths({ loose: true })],
	}),
)
