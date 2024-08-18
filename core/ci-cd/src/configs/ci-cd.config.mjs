export class CICDCommand {
	#commands = {
		build: [
			"@windows98/app",
			"@windows98/design-system",
			"@windows98/micro-apps",
			"@windows98/micro-services",
		],
		"lint:code:run": [
			"@windows98/app",
			"@windows98/configs",
			"@windows98/design-system",
			"@windows98/docs",
			"@windows98/i18n",
			"@windows98/micro-apps",
			"@windows98/micro-services",
		],
		"lint:styles:run": [
			"@windows98/app",
			"@windows98/design-system",
			"@windows98/micro-apps",
		],
		"lint:types:run": [
			"@windows98/app",
			"@windows98/design-system",
			"@windows98/docs",
			"@windows98/i18n",
			"@windows98/micro-apps",
			"@windows98/micro-services",
			"@windows98/toolkit",
		],
		"test:ui:run": ["@windows98/design-system", "@windows98/micro-apps"],
		"test:unit:run": [
			"@windows98/app",
			"@windows98/design-system",
			"@windows98/micro-apps",
			"@windows98/micro-services",
			"@windows98/toolkit",
		],
	}

	async #runCommand(command) {
		return new Promise((resolve, reject) => {
			exec(command, (error, stdout, stderr) => {
				if (error) {
					console.error(`[CICDCommand]: error ${stderr}`)
					reject(error)
				} else {
					console.log(stdout)
					resolve()
				}
			})
		})
	}

	async #runCommands(command) {
		const workspaces = this.#commands[command]

		try {
			for (const workspace of workspaces) {
				console.log(`[CICDCommand/${command}]: ${workspace}`)
				await this.#runCommand(`pnpm -r --filter ${workspace} ${command}`)
			}

			console.log(`[CICDCommand/${command}]: all packages successfully!`)
		} catch (error) {
			console.error(`[CICDCommand/${command}]: process failed ${error}`)
			process.exit(1)
		}
	}

	async run(command) {
		await this.#runCommands(command)
	}
}
