class PNPMReadPackageHook {
	#dependencies = {
		requirements: {
			"@biomejs/biome": "1.9.4",
			"@playwright/experimental-ct-react": "1.55.0",
			"@vitejs/plugin-react": "5.1.2",
			"@types/react": "19.2.7",
			"@types/react-dom": "19.2.3",
			i18next: "25.7.2",
			"lint-staged": "16.2.7",
			mobx: "6.15.0",
			"mobx-react-lite": "4.1.1",
			react: "19.2.1",
			"react-i18next": "16.4.0",
			"react-dom": "19.2.1",
			stylelint: "16.26.1",
			typescript: "5.9.3",
			vite: "7.2.7",
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
