import { LanguageStrategyContract } from '../../contracts';
export declare class ClassLanguageStrategy<ELanguages> implements LanguageStrategyContract<ELanguages> {
    applyLanguage(language: ELanguages): void;
}
