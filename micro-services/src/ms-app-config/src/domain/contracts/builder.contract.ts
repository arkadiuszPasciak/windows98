import type { IConfig } from "../models"

export interface AppConfigBuilderDomainContract<Config extends IConfig> {
	add<Key extends keyof Config>(key: Key, value: Config[Key]): this
	build(): Config
}
