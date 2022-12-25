<template>
  <div class="SettingsGeneral">
    <h3 class="title">{{ t('Settings.device') }}:</h3>
    <p>{{ t(`Settings.${deviceType}`) }}</p>

    <h3 class="title">{{ t('Settings.operation-system') }}:</h3>
    <p>{{ operatingSystem }}</p>

    <h3 class="title">{{ t('Settings.browser') }}:</h3>
    <p>{{ browserName }}</p>
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

<style lang="scss" scoped></style>
