import { CICDCommand } from "../configs/ci-cd.config.mjs"

/**
 * Extracts the command type from the command line arguments and runs the corresponding CICD command.
 */
const [, , commandType] = process.argv

/**
 * Creates an instance of CICDCommand and runs the specified command.
 */
const command = new CICDCommand()
command.run(commandType)
