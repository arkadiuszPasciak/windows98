export interface AppConfigBuilderDomainContract<Config> {
    add<Key extends keyof Config>(key: Key, value: Config[Key]): this;
    build(): Config;
}
