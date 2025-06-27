import { Languages } from "../../infrastructure/configs"
import { LanguageService } from "../../infrastructure/services"

export default function useLanguageManager() {
	return { LanguageService, languages: Languages }
}
