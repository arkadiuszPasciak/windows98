import { AppConfigBuilderDomainContract } from '../contracts';
export declare class AppConfigBuilderDomain<Config> implements AppConfigBuilderDomainContract<Config> {
    private config;
    constructor(config: Config);
    add<Key extends keyof Config>(key: Key, value: Config[Key]): this;
    build(): Config;
    private validateConfig;
}
