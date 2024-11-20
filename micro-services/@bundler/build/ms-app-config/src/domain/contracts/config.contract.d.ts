import type { IConfig } from "../models";
export interface AppConfigDomainContract<Config extends IConfig> {
    readonly config: Config;
    set<Key extends keyof Config>(key: Key, value: Config[Key]): void;
    get<Key extends keyof Config>(key: Key): Config[Key];
}
