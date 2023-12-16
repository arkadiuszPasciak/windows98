<template>
  <div class="SettingsGeneral">
    <img
      class="image"
      data-test="settings-general-image"
      src="/icons/windows-settings.svg"
    />
    <h3 class="title" data-test="settings-general-device-title">
      {{ t('Settings.device') }}:
    </h3>
    <p class="text" data-test="settings-general-device-text">
      {{ deviceType ? t(`Settings.${deviceType}`) : 'undefined' }}
    </p>

    <h3 class="title" data-test="settings-general-operation-system-title">
      {{ t('Settings.operation-system') }}:
    </h3>
    <p class="text" data-test="settings-general-operation-system-text">
      {{ operatingSystem ?? 'undefined' }}
    </p>

    <h3 class="title" data-test="settings-general-browser-title">
      {{ t('Settings.browser') }}:
    </h3>
    <p class="text" data-test="settings-general-browser-text">
      {{ browserName ?? 'undefined' }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import {
    getBrowserName,
    getTypeDevice,
    getOperatingSystem,
  } from '@APP|Bundles/UserAgentBundle/Services/UserAgent.services'

  const { t } = useI18n()

  const userAgent = window.navigator.userAgent ?? null

  const deviceType = getTypeDevice(userAgent)
  const operatingSystem = getOperatingSystem(userAgent)
  const browserName = getBrowserName(userAgent)
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/SettingsBundle/Styles/SettingsGeneral.styles.scss"
/>
