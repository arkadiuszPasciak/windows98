<template>
  <UISelect
    id="languages"
    :model-value="$i18n.locale"
    class="LanguageSwitcher"
    :options="languagesOptions"
    @update:model-value="
      ;($i18n.locale = $event),
        setLanguageVersionInStorage($event),
        updateLangAttribute($event)
    "
  />
</template>

<script setup lang="ts">
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { languagesOptions } from '@Bundles/LanguageBundle/Mocks/Language.mocks'
  import {
    setLanguageVersionInStorage,
    updateLangAttribute,
  } from '@Bundles/LanguageBundle/Services/Language.services'
</script>

<i18n src="@Bundles/LanguageBundle/Locales/Language.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/LanguageBundle/Styles/LanguageSwitcher.styles.scss';
</style>
