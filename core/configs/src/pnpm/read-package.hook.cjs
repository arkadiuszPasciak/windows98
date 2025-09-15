class PNPMReadPackageHook {
	#dependencies = {
		requirements: {
			"@biomejs/biome": "1.9.4",
			"@playwright/experimental-ct-react": "1.54.1",
			"@vitejs/plugin-react": "4.7.0",
			i18next: "25.3.2",
			"lint-staged": "16.1.2",
			mobx: "6.13.7",
			"mobx-react-lite": "4.1.0",
			react: "19.1.1",
			"react-i18next": "15.6.1",
			"react-dom": "19.1.1",
			stylelint: "16.22.0",
			typescript: "5.8.3",
			vite: "7.1.5",
			"vite-plugin-css-injected-by-js": "3.5.2",
			"vite-plugin-dts": "4.5.4",
			vitest: "3.2.4",
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
			node: "22.19.0",
			pnpm: "10.16.1",
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
