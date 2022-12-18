<template>
  <select v-model="locale" class="LanguageSwitcher">
    <option
      v-for="language in languagesOptions"
      :key="`language-options-${language}`"
      :value="language"
    >
      {{ t(`Language.${language}`) }}
    </option>
  </select>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { languagesOptions } from '@Bundles/LanguageBundle/Mocks/Language.mocks'

  const { locale, t } = useI18n()
</script>

<i18n src="@Bundles/LanguageBundle/Locales/Language.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/LanguageBundle/Styles/LanguageSwitcher.styles.scss';
</style>
