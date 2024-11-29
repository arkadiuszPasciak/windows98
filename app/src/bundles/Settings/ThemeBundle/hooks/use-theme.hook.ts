import type { AppThemes } from "@APP/src/configs/app"
import { useAppConfig } from "@APP/src/configs/app"
import { MSTheme } from "@windows98/micro-services"
import { onMounted, ref } from "vue"

const msTheme = new MSTheme<AppThemes>()

export function useTheme() {
	const appConfig = useAppConfig()
	const currentTheme = ref<AppThemes | undefined>(undefined)

	onMounted(() => {
		if (currentTheme.value === undefined) {
			currentTheme.value = appConfig.get("theme")
		}
	})

	const toggleTheme = (theme: AppThemes): void => {
		if (currentTheme.value === theme) return

		currentTheme.value = theme
		appConfig.set("theme", theme)
		msTheme.updateTheme(theme)
	}

	return {
		currentTheme,
		toggleTheme
	}
}
