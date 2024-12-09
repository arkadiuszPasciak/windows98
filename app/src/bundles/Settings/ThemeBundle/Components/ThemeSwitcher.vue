<template>
   <template v-if="themes && currentTheme">
    <UISelect
      id="themes"
      :model-value="currentTheme ?? `undefined`"
      class="ThemeSwitcher"
      :options="themes"
      @update:model-value="toggleTheme($event)"
    />
  </template>
</template>

<script setup lang="ts">
import { useTheme } from "@APP/src/bundles/Settings/ThemeBundle/hooks"
import UISelect from "@APP|Bundles/UISelectBundle/Components/UISelect.vue"

const { currentTheme, themes, toggleTheme } = useTheme()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/ThemeBundle/Styles/ThemeSwitcher.styles.scss"
/>
