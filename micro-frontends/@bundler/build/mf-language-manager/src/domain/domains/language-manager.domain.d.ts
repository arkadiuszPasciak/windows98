import { Maybe } from '@windows98/toolkit';
import { LanguageManagerDomainContract } from '../contracts';
export declare class LanguageManagerDomain<ELanguages extends string> implements LanguageManagerDomainContract<ELanguages> {
    language: Maybe<ELanguages>;
    constructor();
    initLanguage(): void;
    setLanguage(language: ELanguages): void;
}
export declare const languageManagerDomain: LanguageManagerDomain<string>;
