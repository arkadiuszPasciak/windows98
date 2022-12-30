<template>
  <UISelect
    id="themes"
    model-value="dark"
    class="ThemeSwitcher"
    :options="themeOptions"
    @update:model-value="test($event)"
  />
</template>

<script setup lang="ts">
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { themeOptions } from '@Bundles/ThemeBundle/Mocks/Theme.mocks'

  const test = (event: string) => {
    console.log(event)
  }
</script>

<i18n src="@Bundles/ThemeBundle/Locales/Theme.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/ThemeBundle/Styles/ThemeSwitcher.styles.scss';
</style>
