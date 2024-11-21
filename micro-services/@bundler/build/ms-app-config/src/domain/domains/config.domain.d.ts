import type { AppConfigDomainContract } from "../contracts";
export declare class AppConfigDomain<Config> implements AppConfigDomainContract<Config> {
    private static instance;
    private static lock;
    readonly config: Config;
    private constructor();
    static getInstance<Config>(config: Config): AppConfigDomain<Config>;
    set<Key extends keyof Config>(key: Key, value: Config[Key]): void;
    get<Key extends keyof Config>(key: Key): Config[Key];
}
