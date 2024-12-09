import type { Maybe } from "@windows98/toolkit"
import { MSErrorHandler } from "../../../../../ms-error-handler/src"
import type { ThemeStrategyContract } from "../../contracts"

export class ClassThemeStrategy<EThemes>
	implements ThemeStrategyContract<EThemes>
{
	@MSErrorHandler.CatchError("ClassThemeStrategy", "applyTheme")
	public applyTheme(theme: EThemes): void {
		const element: Maybe<HTMLHtmlElement> =
			window.document.querySelector("html")
		const themeClassName: string = `theme-${theme}`

		if (element) {
			element.className = themeClassName
		} else {
			throw new Error("Element HTML not found")
		}
	}
}
