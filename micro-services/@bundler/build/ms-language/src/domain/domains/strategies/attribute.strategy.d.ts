import { LanguageStrategyContract } from '../../contracts';
export declare class AttributeLanguageStrategy<ELanguages> implements LanguageStrategyContract<ELanguages> {
    applyLanguage(language: ELanguages): void;
}
