<template>
  <UISelect
    id="languages-option"
    :model-value="$i18n.locale"
    class="LanguageSwitcher"
    :options="languagesOptions"
    @update:model-value="$i18n.locale = $event"
  />
</template>

<script setup lang="ts">
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { languagesOptions } from '@Bundles/LanguageBundle/Mocks/Language.mocks'
</script>

<i18n src="@Bundles/LanguageBundle/Locales/Language.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/LanguageBundle/Styles/LanguageSwitcher.styles.scss';
</style>
