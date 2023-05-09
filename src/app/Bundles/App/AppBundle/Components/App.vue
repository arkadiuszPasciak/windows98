<template>
  <HomePage />
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useClockStore } from '@APP|Bundles/ClockBundle/Stores/Clock.stores'
  import { mountLanguageVersionByStorage } from '@APP|Bundles/LanguageBundle/Services/Language.services'
  import { mountThemeColorByStorage } from '@APP|Bundles/ThemeBundle/Services/Theme.services'
  import HomePage from '@APP|Views/HomePage/HomePage.vue'

  const clockStore = useClockStore()
  const i18n = useI18n()

  onBeforeMount(() => {
    clockStore.updateTime()
    const languageVersion = mountLanguageVersionByStorage()

    if (languageVersion) {
      i18n.locale.value = languageVersion
    }

    mountThemeColorByStorage()
  })
</script>

<style lang="scss"></style>
