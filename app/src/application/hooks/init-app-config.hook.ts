import { useTranslation } from "react-i18next"
import { useAppConfig } from "./use-app-config.hook"
import { useBrowserEnv } from "./use-browser-env.hook"
import { useLanguageManager } from "./use-language-manager.hook"
import { useLocalStorage } from "./use-local-storage.hook"
import { useThemeManager } from "./use-theme-manager.hook"

export function initAppConfig() {
	const { AppConfigService } = useAppConfig()
	const { LocalStorageService } = useLocalStorage()
	const { ThemeService } = useThemeManager()
	const { LanguageService } = useLanguageManager()
	const { BrowserEnvService } = useBrowserEnv()
	const { i18n } = useTranslation()

	const browserName = BrowserEnvService.getBrowserName()
	const deviceType = BrowserEnvService.getDeviceType()
	const operatingSystem = BrowserEnvService.getOperatingSystem()
	const language = LocalStorageService.get("language")
	const theme = LocalStorageService.get("theme")

	if (browserName) {
		AppConfigService.set("browserName", browserName)
	}

	if (deviceType) {
		AppConfigService.set("deviceType", deviceType)
	}

	if (operatingSystem) {
		AppConfigService.set("operatingSystem", operatingSystem)
	}

	if (language) {
		AppConfigService.set("language", language)
	}

	if (theme) {
		AppConfigService.set("theme", theme)
		ThemeService.updateTheme(theme)
	}

	if (language) {
		i18n.changeLanguage(language)
		LanguageService.updateLanguage(language)
	}
}
