import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { UserDeviceService } from "../../infrastructure/services"
import { useAppConfig } from "./use-app-config.hook"
import { useBrowserEnv } from "./use-browser-env.hook"
import { useLanguageManager } from "./use-language-manager.hook"
import { useStorage } from "./use-storage.hook"
import { useThemeManager } from "./use-theme-manager.hook"

export function useInitAppConfig() {
	const { AppConfigService } = useAppConfig()
	const { StorageService } = useStorage()
	const { ThemeService } = useThemeManager()
	const { LanguageService } = useLanguageManager()
	const { BrowserEnvService } = useBrowserEnv()
	const { i18n } = useTranslation()

	// biome-ignore lint/correctness/useExhaustiveDependencies: This effect runs only once on mount
	useEffect(() => {
		const init = async () => {
			const battery = await UserDeviceService.getBatteryInformation()
			const browserName = BrowserEnvService.getBrowserName()
			const deviceType = BrowserEnvService.getDeviceType()
			const language = StorageService.get("language")
			const memory = UserDeviceService.getMemoryInformation()
			const network = UserDeviceService.getNetworkInformation()
			const operatingSystem = BrowserEnvService.getOperatingSystem()
			const screen = UserDeviceService.getScreenInformation()
			const theme = StorageService.get("theme")

			if (battery) {
				AppConfigService.set("battery", battery)
			}

			if (browserName) {
				AppConfigService.set("browserName", browserName)
			}

			if (deviceType) {
				AppConfigService.set("deviceType", deviceType)
			}

			if (language) {
				i18n.changeLanguage(language)
				LanguageService.updateLanguage(language)
				AppConfigService.set("language", language)
			}

			if (memory) {
				AppConfigService.set("memory", memory)
			}

			if (network) {
				AppConfigService.set("network", network)
			}

			if (operatingSystem) {
				AppConfigService.set("operatingSystem", operatingSystem)
			}

			if (screen) {
				AppConfigService.set("screen", screen)
			}

			if (theme) {
				AppConfigService.set("theme", theme)
				ThemeService.updateTheme(theme)
			}
		}

		void init()
	}, [])
}
