export interface AppConfigDomainContract<Config> {
	readonly config: Config

	set<Key extends keyof Config>(key: Key, value: Config[Key]): void
	get<Key extends keyof Config>(key: Key): Config[Key]
}
