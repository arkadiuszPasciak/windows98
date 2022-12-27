<template>
  <div class="SettingsGeneral">
    <div class="image"></div>
    <h3 class="title">{{ t('Settings.device') }}:</h3>
    <p class="text">
      {{ deviceType ? t(`Settings.${deviceType}`) : 'undefined' }}
    </p>

    <h3 class="title">{{ t('Settings.operation-system') }}:</h3>
    <p class="text">{{ operatingSystem ?? 'undefined' }}</p>

    <h3 class="title">{{ t('Settings.browser') }}:</h3>
    <p class="text">{{ browserName ?? 'undefined' }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import {
    getBrowserName,
    getTypeDevice,
    getOperatingSystem,
  } from '@Bundles/NavigatorBundle/Services/Navigator.services'

  const { t } = useI18n()

  const userAgent = window.navigator.userAgent ?? null

  const deviceType = getTypeDevice(userAgent)
  const operatingSystem = getOperatingSystem(userAgent)
  const browserName = getBrowserName(userAgent)
</script>

<i18n src="@Bundles/SettingsBundle/Locales/Settings.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/SettingsBundle/Styles/SettingsGeneral.styles.scss';
</style>
