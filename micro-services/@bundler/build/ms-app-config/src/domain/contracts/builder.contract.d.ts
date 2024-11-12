import type { IConfig } from "../models";
export interface AppConfigBuilderDomainContract<EThemes, ELanguages> {
    readonly config: IConfig<EThemes, ELanguages>;
    addTheme(theme: EThemes): this;
    addLanguage(language: ELanguages): this;
    build(): IConfig<EThemes, ELanguages>;
}
