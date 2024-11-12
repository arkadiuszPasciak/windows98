import type { AppConfigBuilderDomainContract } from "../contracts"
import type { IConfig } from "../models"

export class AppConfigBuilderDomain<EThemes, ELanguages>
	implements AppConfigBuilderDomainContract<EThemes, ELanguages> {
	readonly config: IConfig<EThemes, ELanguages>

	constructor() {
		this.config = {
			theme: undefined,
			language: undefined,
		}
	}

	public addTheme(theme: EThemes): this {
		this.config.theme = theme

		return this
	}

	public addLanguage(language: ELanguages): this {
		this.config.language = language

		return this
	}

	public build(): IConfig<EThemes, ELanguages> {
		this.validateConfig()

		return this.config
	}

	private validateConfig(): void {
		for (const [key, value] of Object.entries(this.config)) {
			if (value === undefined) throw new Error(`[MSAppConfig]: Missing ${key}`)
		}
	}
}
