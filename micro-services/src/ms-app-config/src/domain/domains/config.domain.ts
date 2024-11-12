import type { AppConfigDomainContract } from "../contracts"
import type { IConfig } from "../models"

export class AppConfigDomain<EThemes, ELanguages>
	implements AppConfigDomainContract<EThemes, ELanguages>
{
	// biome-ignore lint/suspicious/noExplicitAny: any is used to store the instance of the class
	private static instance: AppConfigDomain<any, any> | undefined = undefined
	private static lock = false
	readonly config: IConfig<EThemes, ELanguages>

	private constructor(config: IConfig<EThemes, ELanguages>) {
		this.config = config
	}

	public static getInstance<EThemes, ELanguages>(
		config: IConfig<EThemes, ELanguages>,
	): AppConfigDomain<EThemes, ELanguages> {
		while (AppConfigDomain.lock) {
			/* Busy-wait until the lock is released */
		}

		AppConfigDomain.lock = true

		if (!AppConfigDomain.instance) {
			AppConfigDomain.instance = new AppConfigDomain(config)
		}

		AppConfigDomain.lock = false

		return AppConfigDomain.instance
	}

	public setLanguage(language: ELanguages): void {
		if (this.config.language === language) return

		this.config.language = language
	}

	public setTheme(theme: EThemes): void {
		if (this.config.theme === theme) return

		this.config.theme = theme
	}
}
