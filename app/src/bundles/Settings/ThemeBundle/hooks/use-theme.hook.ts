import type { TUISelectPropsObject } from "@APP/src/bundles/UI/UISelectBundle/Supports/UISelect.supports"
import { AppThemes } from "@APP/src/configs/app"
import { useAppConfig, useLocalStorage } from "@APP/src/configs/app"
import { MSTheme } from "@windows98/micro-services"
import { onBeforeMount, ref } from "vue"

const msTheme = new MSTheme<AppThemes>()

export function useTheme() {
	const appConfig = useAppConfig()
	const localStorage = useLocalStorage()

	const currentTheme = ref<AppThemes | undefined>(undefined)

	onBeforeMount(() => {
		currentTheme.value = appConfig.get("theme")
	})

	const themes: TUISelectPropsObject = [
		{
			value: AppThemes.LIGHT,
			name: `ThemeBundle.${AppThemes.LIGHT}`,
		},
		{
			value: AppThemes.DARK,
			name: `ThemeBundle.${AppThemes.DARK}`,
		},
	]

	const toggleTheme = (theme: AppThemes): void => {
		if (currentTheme.value === theme) return

		currentTheme.value = theme
		appConfig.set("theme", theme)
		msTheme.updateTheme(theme)
		localStorage.set("theme", theme)
	}

	return {
		currentTheme,
		toggleTheme,
		themes,
	}
}
