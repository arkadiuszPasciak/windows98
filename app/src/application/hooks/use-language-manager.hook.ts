import { Languages } from "../../infrastructure/configs"
import { LanguageService } from "../../infrastructure/services"

export function useLanguageManager() {
	return { LanguageService, languages: Languages }
}
