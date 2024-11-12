import type { AppConfigBuilderDomainContract } from "../contracts";
import type { IConfig } from "../models";
export declare class AppConfigBuilderDomain<EThemes, ELanguages> implements AppConfigBuilderDomainContract<EThemes, ELanguages> {
    readonly config: IConfig<EThemes, ELanguages>;
    constructor();
    addTheme(theme: EThemes): this;
    addLanguage(language: ELanguages): this;
    build(): IConfig<EThemes, ELanguages>;
    private validateConfig;
}
