import type { Maybe } from "@windows98/toolkit"
import { CatchError } from "@windows98/toolkit"
import type { LanguageStrategyContract } from "../../contracts"

export class ClassLanguageStrategy<ELanguages>
	implements LanguageStrategyContract<ELanguages>
{
	@CatchError()
	public applyLanguage(language: ELanguages): void {
		const element: Maybe<HTMLHtmlElement> =
			window.document.querySelector("html")
		const languageClassName: string = `language-${language}`

		if (element) {
			element.className = languageClassName
		} else {
			throw new Error("Element HTML not found")
		}
	}
}
