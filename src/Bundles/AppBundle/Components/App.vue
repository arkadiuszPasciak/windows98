<template>
  <HomePage />
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useClockStore } from '@Bundles/ClockBundle/Stores/Clock.stores'
  import { mountLanguageVersionByStorage } from '@Bundles/LanguageBundle/Services/Language.services'
  import HomePage from '@Views/HomePage/HomePage.vue'

  const clockStore = useClockStore()
  const i18n = useI18n()

  onBeforeMount(() => {
    clockStore.updateTime()
    const languageVersion = mountLanguageVersionByStorage()

    if (languageVersion) {
      i18n.locale.value = languageVersion
    }
  })
</script>

<style lang="scss"></style>
