import type { IConfig } from "../models";
export interface AppConfigDomainContract<EThemes, ELanguages> {
    readonly config: IConfig<EThemes, ELanguages>;
    setLanguage(language: ELanguages): void;
    setTheme(EThemes: EThemes): void;
}
