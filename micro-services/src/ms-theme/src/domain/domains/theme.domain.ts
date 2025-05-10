import type { ThemeDomainContract, ThemeStrategyContract } from "../contracts"
import { AttributeThemeStrategy } from "./strategies"

class ThemeDomain<EThemes> implements ThemeDomainContract<EThemes> {
	private themeStrategy: ThemeStrategyContract<EThemes>

	constructor(themeStrategy: ThemeStrategyContract<EThemes>) {
		this.themeStrategy = themeStrategy
	}

	public updateTheme(theme: EThemes): void {
		this.themeStrategy.applyTheme(theme)
	}

	public getTheme(): EThemes {
		return this.themeStrategy.getTheme()
	}
}

export class MSTheme<EThemes> extends ThemeDomain<EThemes> {
	constructor() {
		super(new AttributeThemeStrategy<EThemes>())
	}
}
