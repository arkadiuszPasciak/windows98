<template>
  <UISelect
    id="languages"
    :model-value="$i18n.locale"
    class="LanguageSwitcher"
    :options="MLanguageOptions"
    @update:model-value="
      ;($i18n.locale = $event),
        setLanguageVersionInStorage($event),
        updateLangAttribute($event)
    "
  />
</template>

<script setup lang="ts">
  import UISelect from '@APP|Bundles/UISelectBundle/Components/UISelect.vue'
  import { MLanguageOptions } from '@APP|Bundles/LanguageBundle/Mocks/Language.mocks'
  import {
    setLanguageVersionInStorage,
    updateLangAttribute,
  } from '@APP|Bundles/LanguageBundle/Services/Language.services'
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/LanguageBundle/Styles/LanguageSwitcher.styles.scss"
/>
