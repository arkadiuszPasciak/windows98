export interface AppConfigBuilderDomainContract<Config> {
	// readonly config: Config

	add<Key extends keyof Config>(key: Key, value: Config[Key]): this
	build(): Config
}
