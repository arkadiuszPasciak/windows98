import { useTranslation } from "react-i18next"
import {
	useAppConfig,
	useLanguageManager,
	useProgramManager,
	useStorage,
	useThemeManager,
} from "../../../application/hooks"
import { GeneralInformationBuilder } from "../../../infrastructure/configs"
import {
	type Language,
	Program,
	type Theme,
} from "../../../infrastructure/types"

export function useSettings() {
	const { AppConfigService } = useAppConfig()
	const { languages, LanguageService } = useLanguageManager()
	const { runProgram } = useProgramManager()
	const { themes, ThemeService } = useThemeManager()
	const { i18n, t } = useTranslation()
	const { StorageService } = useStorage()
	const builder = new GeneralInformationBuilder(t)

	// TODO: Implement generic type in ms-language-manager
	const onChangeLanguage = (language: string) => {
		LanguageService.updateLanguage(language as Language)
		i18n.changeLanguage(language)
		StorageService.set("language", language as Language)
	}

	// TODO: Implement generic type in ms-theme-manager
	const onChangeTheme = (theme: string) => {
		ThemeService.updateTheme(theme as Theme)
		StorageService.set("theme", theme as Theme)
	}

	const onCloseProgram = () => {
		runProgram(Program.SETTINGS, false)
	}

	const battery = AppConfigService.get("battery")
	const browserName = AppConfigService.get("browserName")
	const deviceType = AppConfigService.get("deviceType")
	const memory = AppConfigService.get("memory")
	const network = AppConfigService.get("network")
	const operatingSystem = AppConfigService.get("operatingSystem")
	const screen = AppConfigService.get("screen")

	const generalInformation = builder
		.withBattery(battery)
		.withBrowser(browserName)
		.withDevice(deviceType)
		.withMemory(memory)
		.withNetwork(network)
		.withOperatingSystem(operatingSystem)
		.withScreen(screen)
		.build()

	return {
		generalInformation,
		languages,
		onChangeLanguage,
		onChangeTheme,
		onCloseProgram,
		themes,
	}
}
