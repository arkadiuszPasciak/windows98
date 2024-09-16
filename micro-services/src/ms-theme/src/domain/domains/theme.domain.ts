import { MSStorage } from "../../../../index"
import type { ThemeDomainContract } from "../contracts"
import { EAttributes, EStorageKeys } from "../models"

export class ThemeDomain<Theme extends string>
	implements ThemeDomainContract<Theme>
{
	private storage: MSStorage<string, Theme>
	private defaultTheme: Theme

	constructor(defaultTheme: Theme) {
		this.storage = new MSStorage()
		this.defaultTheme = defaultTheme
	}

	public getThemeColor(): Theme {
		const theme = this.storage.getItem(EStorageKeys.THEME)
		return theme ?? this.defaultTheme
	}

	public setThemeColor(theme: Theme): void {
		this.storage.updateItem(EStorageKeys.THEME, theme)
	}

	public updateTheme(theme: Theme): void {
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
