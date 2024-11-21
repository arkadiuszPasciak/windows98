import type { AppConfigDomainContract } from "../contracts"

export class AppConfigDomain<Config>
	implements AppConfigDomainContract<Config>
{
	// biome-ignore lint/suspicious/noExplicitAny: any is used to store the instance of the class
	private static instance: AppConfigDomain<any> | undefined = undefined
	private static lock = false
	readonly config: Config

	private constructor(config: Config) {
		this.config = config
	}

	public static getInstance<Config>(config: Config): AppConfigDomain<Config> {
		while (AppConfigDomain.lock) {
			/* Busy-wait until the lock is released */
		}

		AppConfigDomain.lock = true

		if (!AppConfigDomain.instance) {
			AppConfigDomain.instance = new AppConfigDomain(config)
		}

		AppConfigDomain.lock = false

		return AppConfigDomain.instance
	}

	public set<Key extends keyof Config>(key: Key, value: Config[Key]): void {
		if (this.config[key] === value) return

		this.config[key] = value
	}

	public get<Key extends keyof Config>(key: Key): Config[Key] {
		return this.config[key]
	}
}
