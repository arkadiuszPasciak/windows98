<template>
  <div class="SettingsGeneral">
    <h3
      class="title"
      data-test="settings-general-device-title"
    >
      {{ t('Settings.device') }}:
    </h3>
    <p
      class="text"
      data-test="settings-general-device-text"
    >
      {{ deviceType ? t(`Settings.${deviceType}`) : 'undefined' }}
    </p>

    <h3
      class="title"
      data-test="settings-general-operation-system-title"
    >
      {{ t('Settings.operation-system') }}:
    </h3>
    <p
      class="text"
      data-test="settings-general-operation-system-text"
    >
      {{ operatingSystem ?? 'undefined' }}
    </p>

    <h3
      class="title"
      data-test="settings-general-browser-title"
    >
      {{ t('Settings.browser') }}:
    </h3>
    <p
      class="text"
      data-test="settings-general-browser-text"
    >
      {{ browserName ?? 'undefined' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import useSettingsGeneral from "@APP|Bundles/SettingsBundle/composables/use-settings-general"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const { browserName, operatingSystem, deviceType } = useSettingsGeneral()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/SettingsBundle/Styles/SettingsGeneral.styles.scss"
/>
