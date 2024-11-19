import { MSErrorHandler } from "../../../../ms-error-handler/src"
import type { AppConfigBuilderDomainContract } from "../contracts"

export class AppConfigBuilderDomain<Config>
	implements AppConfigBuilderDomainContract<Config>
{
	private config: Config

	constructor(config: Config) {
		this.config = config
	}

	public add<Key extends keyof Config>(key: Key, value: Config[Key]): this {
		this.config[key] = value

		return this
	}

	public build(): Config {
		this.validateConfig()

		return this.config
	}

	@MSErrorHandler.CatchError("AppConfigBuilderDomain", "validateConfig")
	private validateConfig(): void {
		if (this.config === undefined) throw new Error("missing config")

		for (const [key, value] of Object.entries(
			this.config as Record<string, unknown>,
		)) {
			if (value === undefined) throw new Error(`missing ${key}`)
		}
	}
}
