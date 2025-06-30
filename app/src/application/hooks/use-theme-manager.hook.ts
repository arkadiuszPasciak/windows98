import { Themes } from "../../infrastructure/configs"
import { ThemeService } from "../../infrastructure/services"

export function useThemeManager() {
	return {
		ThemeService,
		themes: Themes,
	}
}
