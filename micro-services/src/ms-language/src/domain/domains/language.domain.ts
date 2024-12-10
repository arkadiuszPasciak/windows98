import type {
	LanguageDomainContract,
	LanguageStrategyContract,
} from "../contracts"
import { AttributeLanguageStrategy } from "./strategies"

class LanguageDomain<ELanguages> implements LanguageDomainContract<ELanguages> {
	private languageStrategy: LanguageStrategyContract<ELanguages>

	constructor(languageStrategy: LanguageStrategyContract<ELanguages>) {
		this.languageStrategy = languageStrategy
	}

	public updateLanguage(language: ELanguages): void {
		this.languageStrategy.applyLanguage(language)
	}
}

export class MSLanguage<ELanguages> extends LanguageDomain<ELanguages> {
	constructor() {
		super(new AttributeLanguageStrategy<ELanguages>())
	}
}
