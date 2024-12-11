import type { LanguageDomainContract, LanguageStrategyContract } from "../contracts";
declare class LanguageDomain<ELanguages> implements LanguageDomainContract<ELanguages> {
    private languageStrategy;
    constructor(languageStrategy: LanguageStrategyContract<ELanguages>);
    updateLanguage(language: ELanguages): void;
}
export declare class MSLanguage<ELanguages> extends LanguageDomain<ELanguages> {
    constructor();
}
export {};
