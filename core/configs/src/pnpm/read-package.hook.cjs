class PNPMReadPackageHook {
	#dependencies = {
		requirements: {
			"@biomejs/biome": "1.8.3",
			"@playwright/experimental-ct-react": "1.45.1",
			"@vitejs/plugin-react": "4.2.1",
			i18next: "23.8.2",
			"lint-staged": "15.2.2",
			mobx: "6.12.0",
			"mobx-react-lite": "4.0.4",
			react: "18.2.0",
			"react-i18next": "14.0.5",
			"react-dom": "18.2.0",
			stylelint: "16.2.1",
			typescript: "5.4.2",
			vite: "5.2.8",
			"vite-plugin-css-injected-by-js": "3.3.1",
			"vite-plugin-dts": "3.7.0",
			vitest: "1.3.1",
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
			node: "20.12.0",
			pnpm: "9.0.6",
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
