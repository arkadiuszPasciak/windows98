class PNPMReadPackageHook {
	#dependencies = {
		requirements: {
			"@biomejs/biome": "2.3.13",
			"@playwright/experimental-ct-react": "1.58.2",
			"@vitejs/plugin-react": "6.0.1",
			"@storybook/addon-a11y": "10.2.1",
			"@storybook/addon-docs": "10.2.1",
			"@storybook/react-vite": "10.2.1",
			"@types/react": "19.2.14",
			"@types/react-dom": "19.2.3",
			i18next: "25.8.0",
			lightningcss: "1.32.0",
			"lint-staged": "16.2.7",
			mobx: "6.15.0",
			"mobx-react-lite": "4.1.1",
			react: "19.2.4",
			"react-i18next": "16.5.4",
			"react-dom": "19.2.4",
			stylelint: "17.0.0",
			storybook: "10.2.1",
			typescript: "6.0.2",
			vite: "8.0.2",
			"vite-plugin-css-injected-by-js": "4.0.1",
			"vite-plugin-dts": "4.5.4",
			vitest: "4.1.1",
		},
		types: [
			"dependencies",
			"devDependencies",
			"peerDependencies",
			"optionalDependencies",
		],
	}

	#engines = {
		requirements: {
			node: "24.14.0",
			pnpm: "10.32.1",
		},
	}

	run = (pkg) => {
		if (!pkg || typeof pkg !== "object") {
			throw new Error("[PNPMReadPackageHook]: Invalid packages object")
		}

		if (this.#checkOnlyMyWorkspace(pkg)) {
			this.#checkDependencies(pkg)
			this.#checkEngines(pkg)
		}

		return pkg
	}

	#checkDependencies = (pkg) => {
		for (const type of this.#dependencies.types) {
			for (const dependency of Object.keys(this.#dependencies.requirements)) {
				if (
					pkg[type]?.[dependency] &&
					pkg[type][dependency] !== this.#dependencies.requirements[dependency]
				) {
					throw new Error(
						`[PNPMReadPackageHook]: Dependency version mismatch in "${pkg.name}" for ${dependency} of ${type}. Expected: ${this.#dependencies.requirements[dependency]}, Found: ${pkg[type][dependency]}`,
					)
				}
			}
		}
	}

	#checkEngines = (pkg) => {
		for (const engine of Object.keys(this.#engines.requirements)) {
			if (
				pkg.engines?.[engine] &&
				pkg.engines[engine] !== this.#engines.requirements[engine]
			) {
				throw new Error(
					`[PNPMReadPackageHook]: Engine version mismatch in "${pkg.name}" for ${engine}. Expected: ${this.#engines.requirements[engine]}, Found: ${pkg.engines[engine]}`,
				)
			}
		}
	}

	#checkOnlyMyWorkspace = (pkg) => {
		if (pkg.name.startsWith("@windows98") || pkg.name.startsWith("windows98")) {
			return true
		}

		return false
	}
}

module.exports = PNPMReadPackageHook
