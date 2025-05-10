import type { Maybe } from "@windows98/toolkit"
import { MSErrorHandler } from "../../../../../ms-error-handler/src"
import type { ThemeStrategyContract } from "../../contracts"

export class ClassThemeStrategy<EThemes>
	implements ThemeStrategyContract<EThemes>
{
	@MSErrorHandler.CatchError("ClassThemeStrategy", "applyTheme")
	public applyTheme(theme: EThemes): void {
		const element: Maybe<HTMLHtmlElement> = this.getHtmlElement()
		const themeClassName: string = `theme-${theme}`

		if (!element) {
			throw new Error("Unable to apply the theme")
		}

		element.className = themeClassName
	}

	@MSErrorHandler.CatchError("ClassThemeStrategy", "getTheme")
	public getTheme(): EThemes {
		const element: Maybe<HTMLHtmlElement> = this.getHtmlElement()

		if (!element?.className.startsWith("theme-")) {
			throw new Error("Unable to get the current theme")
		}

		const themeName = element.className.replace("theme-", "") as EThemes
		return themeName
	}

	@MSErrorHandler.CatchError("ClassThemeStrategy", "getHtmlElement")
	private getHtmlElement(): Maybe<HTMLHtmlElement> {
		const element: Maybe<HTMLHtmlElement> =
			window.document.querySelector("html")

		if (!element) {
			throw new Error("Element HTML not found")
		}

		return element
	}
}
