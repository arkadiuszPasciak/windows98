<template>
  <template v-if="currentLanguage && languages">
    <UISelect
      id="languages"
      :model-value="currentLanguage"
      class="LanguageSwitcher"
      :options="languages"
      @update:model-value="toggleLanguage($event)"
    />
  </template>
</template>

<script setup lang="ts">
import UISelect from "@APP|Bundles/UISelectBundle/Components/UISelect.vue"
import { useLanguage } from "../hooks/use-language.hook"

const { currentLanguage, languages, toggleLanguage } = useLanguage()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/LanguageBundle/Styles/LanguageSwitcher.styles.scss"
/>
