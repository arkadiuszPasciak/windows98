<template>
  <UISelect
    id="languages-option"
    class="LanguageSwitcher"
    :options="languagesOptions"
    model-value="123"
    @update:model-value="changeLocales($event)"
  />

  <div>value is {{ i18n.locale }}</div>
</template>

<script setup lang="ts">
  import { WritableComputedRef } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { languagesOptions } from '@Bundles/LanguageBundle/Mocks/Language.mocks'

  const i18n = useI18n()

  const changeLocales = (locale: WritableComputedRef<string>): void => {
    i18n.locale = locale
  }
</script>

<i18n src="@Bundles/LanguageBundle/Locales/Language.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/LanguageBundle/Styles/LanguageSwitcher.styles.scss';
</style>
