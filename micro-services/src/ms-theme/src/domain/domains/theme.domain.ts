import { MSStorage } from "../../../../index"
import type { ThemeDomainContract } from "../contracts"
import { EAttributes, EStorageKeys, EThemes } from "../models"

export class ThemeDomain implements ThemeDomainContract {
	private storage = new MSStorage<EStorageKeys, EThemes>()
	private defaultTheme: EThemes = EThemes.LIGHT

	public getThemeColor(): EThemes {
		const theme = this.storage.getItem(EStorageKeys.THEME)

		return theme ?? this.defaultTheme
	}

	public setThemeColor(theme: EThemes): void {
		this.storage.updateItem(EStorageKeys.THEME, theme)
	}

	public updateTheme(theme: EThemes): void {
		const element = window.document.querySelector("html")
		if (!element) return

		const currentTheme = element.getAttribute(EAttributes.THEME)
		if (currentTheme === theme) return

		element.setAttribute(EAttributes.THEME, theme)
	}

	public mountThemeColor(): void {
		const isExist = this.storage.isItemExist(EStorageKeys.THEME)

		if (!isExist) {
			this.initDefaultTheme()

			return
		}

		const theme = this.storage.getItem(EStorageKeys.THEME)
		if (!theme) return

		this.updateTheme(theme)
	}

	private initDefaultTheme(): void {
		this.updateTheme(this.defaultTheme)
		this.setThemeColor(this.defaultTheme)
	}
}
