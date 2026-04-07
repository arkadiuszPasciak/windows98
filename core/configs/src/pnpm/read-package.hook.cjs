class PNPMReadPackageHook {
	#dependencies = {
		requirements: {
			"@biomejs/biome": "2.4.10",
			"@playwright/experimental-ct-react": "1.59.1",
			"@vitejs/plugin-react": "6.0.1",
			"@storybook/addon-a11y": "10.3.4",
			"@storybook/addon-docs": "10.3.4",
			"@storybook/react-vite": "10.3.4",
			"@types/react": "19.2.10",
			"@types/react-dom": "19.2.3",
			i18next: "26.0.3",
			lightningcss: "1.32.0",
			"lint-staged": "16.4.0",
			mobx: "6.15.0",
			"mobx-react-lite": "4.1.1",
			react: "19.2.4",
			"react-i18next": "17.0.2",
			"react-dom": "19.2.4",
			stylelint: "17.6.0",
			storybook: "10.3.4",
			typescript: "5.9.3",
			vite: "8.0.6",
			"vite-plugin-css-injected-by-js": "4.0.1",
			"vite-plugin-dts": "4.5.4",
			vitest: "4.1.3",
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
			node: "24.14.1",
			pnpm: "10.33.0",
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
