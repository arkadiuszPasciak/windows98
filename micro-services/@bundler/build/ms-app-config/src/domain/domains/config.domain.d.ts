import type { AppConfigDomainContract } from "../contracts";
import type { IConfig } from "../models";
export declare class AppConfigDomain<EThemes, ELanguages> implements AppConfigDomainContract<EThemes, ELanguages> {
    private static instance;
    private static lock;
    readonly config: IConfig<EThemes, ELanguages>;
    private constructor();
    static getInstance<EThemes, ELanguages>(config: IConfig<EThemes, ELanguages>): AppConfigDomain<EThemes, ELanguages>;
    setLanguage(language: ELanguages): void;
    setTheme(theme: EThemes): void;
}
