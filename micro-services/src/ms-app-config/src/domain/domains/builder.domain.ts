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
		return this.config
	}
}
