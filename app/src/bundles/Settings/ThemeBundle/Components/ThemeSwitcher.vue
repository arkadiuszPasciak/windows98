<template>
  <UISelect
    id="themes"
    :model-value="themeValue"
    class="ThemeSwitcher"
    :options="MThemeOptions"
    @update:model-value="update($event)"
  />
</template>

<script setup lang="ts">
import { MThemeOptions } from "@APP/src/bundles/Settings/ThemeBundle/Mocks/Theme.mocks"
import {
	getThemeColorFromStorage,
	setThemeColorInStorage,
	updateThemeClass,
} from "@APP/src/bundles/Settings/ThemeBundle/Services/Theme.services"
import type { TThemes } from "@APP/src/bundles/Settings/ThemeBundle/Supports/Theme.supports"
import UISelect from "@APP|Bundles/UISelectBundle/Components/UISelect.vue"

const themeValue = getThemeColorFromStorage()

const update = (event: TThemes): void => {
	updateThemeClass(event)
	setThemeColorInStorage(event)
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/ThemeBundle/Styles/ThemeSwitcher.styles.scss"
/>
