import type { AppConfigDomainContract } from "../contracts"

export class AppConfigDomain<EThemes, ELanguages>
	implements AppConfigDomainContract<EThemes, ELanguages>
{
	// biome-ignore lint/suspicious/noExplicitAny: any is used to store the instance of the class
	private static instance: AppConfigDomain<any, any> | undefined = undefined
	private static lock = false
	public language: ELanguages
	public theme: EThemes

	private constructor(language: ELanguages, theme: EThemes) {
		this.language = language
		this.theme = theme
	}

	public static getInstance<EThemes, ELanguages>(
		language: ELanguages,
		theme: EThemes,
	): AppConfigDomain<EThemes, ELanguages> {
		while (AppConfigDomain.lock) {
			/* Busy-wait until the lock is released */
		}

		AppConfigDomain.lock = true

		if (!AppConfigDomain.instance) {
			AppConfigDomain.instance = new AppConfigDomain(language, theme)
		}

		AppConfigDomain.lock = false

		return AppConfigDomain.instance
	}

	public setLanguage(language: ELanguages): void {
		if (this.language === language) return

		this.language = language
	}

	public setTheme(theme: EThemes): void {
		if (this.theme === theme) return

		this.theme = theme
	}
}
