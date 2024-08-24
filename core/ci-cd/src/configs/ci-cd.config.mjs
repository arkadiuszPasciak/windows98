import { exec } from "node:child_process"

/**
 * Class representing a CICD command executor.
 */
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
        "lint:staged:fix": [
            "@windows98/app",
            "@windows98/configs",
            "@windows98/design-system",
            "@windows98/docs",
            "@windows98/i18n",
            "@windows98/micro-apps",
            "@windows98/micro-services",
            "@windows98/toolkit",
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

    /**
     * Executes a shell command.
     * @private
     * @param {string} command - The command to execute.
     * @returns {Promise<void>} - A promise that resolves when the command completes.
     */
    async #runCommand(command) {
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(
                        new Error(`[CICDCommand]: error executing ${command}: ${stderr}`),
                    )
                } else {
                    console.log(stdout)
                    resolve()
                }
            })
        })
    }

    /**
     * Runs a series of commands for the specified workspace.
     * @private
     * @param {string} command - The command to run.
     * @throws Will throw an error if the command is not provided or not found.
     * @returns {Promise<void>} - A promise that resolves when all commands complete.
     */
    async #runCommands(command) {
        if (!command) {
            throw new Error("[CICDCommand]: command is required")
        }

        if (!this.#commands[command]) {
            throw new Error(`[CICDCommand]: command ${command} not found`)
        }

        const workspaces = this.#commands[command]

        try {
            for (const workspace of workspaces) {
                console.log(`[CICDCommand/${command}]: ${workspace}`)
                await this.#runCommand(`pnpm -r --filter ${workspace} ${command}`)
            }

            console.log(`[CICDCommand/${command}]: all packages successfully!`)
        } catch (error) {
            throw new Error(`[CICDCommand/${command}]: process failed ${error}`)
        }
    }

    /**
     * Public method to run a specified command.
     * @param {string} command - The command to run.
     * @returns {Promise<void>} - A promise that resolves when the command completes.
     */
    async run(command) {
        await this.#runCommands(command)
    }
}
