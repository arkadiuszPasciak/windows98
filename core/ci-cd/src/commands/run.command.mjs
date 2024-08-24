import { CICDCommand } from "../configs/ci-cd.config.mjs"

const [, , commandType] = process.argv

const command = new CICDCommand()
command.run(commandType)
