import type { UserConfig as VitestConfigInterface } from "vitest/config"
import { getPathMain } from "./path.config"

const vitestConfig = {
	globals: true,
	cache: {
		dir: getPathMain("node_modules/.vitest"),
	},
	environment: "jsdom",
	setupFiles: [getPathMain("app/configs/vue-test-utils.config.ts")],
	include: ["../../**/*.units.ts"],
} as VitestConfigInterface["test"]

export default vitestConfig
