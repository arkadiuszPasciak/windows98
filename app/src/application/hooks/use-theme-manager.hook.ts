import { Themes } from "../../infrastructure/configs"
import { ThemeService } from "../../infrastructure/services"

export default function useThemeManager() {
	return {
		ThemeService,
		themes: Themes,
	}
}
