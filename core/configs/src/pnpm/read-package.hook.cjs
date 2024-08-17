class PNPMReadPackageHook {
	#dependencies = {
		libraries: {
			react: "18.2.0",
			"react-dom": "18.2.0",
		},
		types: [
			"dependencies",
			"devDependencies",
			"peerDependencies",
			"optionalDependencies",
		],
	}

	run = (packages) => {
		if (!packages || typeof packages !== "object") {
			throw new Error("[PNPMReadPackageHook]: Invalid packages object")
		}

		this.#checkDependencies(packages)

		return packages
	}

	#checkDependencies = (packages) => {
		for (const type of this.#dependencies.types) {
			for (const dependency of Object.keys(this.#dependencies.libraries)) {
				if (
					packages[type]?.[dependency] &&
					packages[type][dependency] !==
						this.#dependencies.libraries[dependency]
				) {
					throw new Error(
						`[PNPMReadPackageHook]: Dependency version mismatch in "${packages.name}" for ${dependency} of ${type}. Expected: ${this.#dependencies.libraries[dependency]}, Found: ${packages[type][dependency]}`,
					)
				}
			}
		}
	}
}

module.exports = PNPMReadPackageHook
