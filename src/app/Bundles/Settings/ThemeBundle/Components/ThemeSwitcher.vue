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
  import UISelect from '@Bundles/UISelectBundle/Components/UISelect.vue'
  import { MThemeOptions } from '@Bundles/ThemeBundle/Mocks/Theme.mocks'
  import {
    updateThemeClass,
    setThemeColorInStorage,
    getThemeColorFromStorage,
  } from '@Bundles/ThemeBundle/Services/Theme.services'
  import { TThemes } from '@Bundles/ThemeBundle/Supports/Theme.supports'

  const themeValue = getThemeColorFromStorage()

  const update = (event: TThemes): void => {
    updateThemeClass(event)
    setThemeColorInStorage(event)
  }
</script>

<i18n src="@Bundles/ThemeBundle/Locales/Theme.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/ThemeBundle/Styles/ThemeSwitcher.styles.scss"
/>
