<template>
  <UISelect
    id="languages"
    :model-value="i18n.locale.value"
    class="LanguageSwitcher"
    :options="MLanguageOptions"
    @update:model-value="
      ;(i18n.locale.value = $event),
        setLanguageVersionInStorage($event),
        updateLangAttribute($event),
        setLanguage($event)
    "
  />
</template>

<script setup lang="ts">
import { MLanguageOptions } from "@APP/src/bundles/Settings/LanguageBundle/Mocks/Language.mocks"
import {
	setLanguageVersionInStorage,
	updateLangAttribute,
} from "@APP/src/bundles/Settings/LanguageBundle/Services/Language.services"
import { type AppLanguages, useAppConfig } from "@APP/src/configs/app"
import UISelect from "@APP|Bundles/UISelectBundle/Components/UISelect.vue"
import { useI18n } from "vue-i18n"

const { appConfig } = useAppConfig()
const i18n = useI18n()

const setLanguage = (language: AppLanguages): void => {
	appConfig.set("language", language)
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/LanguageBundle/Styles/LanguageSwitcher.styles.scss"
/>
