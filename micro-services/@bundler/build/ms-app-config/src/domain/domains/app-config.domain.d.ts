import type { AppConfigDomainContract } from "../contracts";
export declare class AppConfigDomain<EThemes, ELanguages> implements AppConfigDomainContract<EThemes, ELanguages> {
    private static instance;
    private static lock;
    language: ELanguages;
    theme: EThemes;
    private constructor();
    static getInstance<EThemes, ELanguages>(language: ELanguages, theme: EThemes): AppConfigDomain<EThemes, ELanguages>;
    setLanguage(language: ELanguages): void;
    setTheme(theme: EThemes): void;
}
