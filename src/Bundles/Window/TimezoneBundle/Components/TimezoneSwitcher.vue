<template>
  <UIFrame class="TimezoneSwitcher" :title="t('TimezoneBundle.title')">
    <UISelect
      id="timezones"
      class="select"
      :model-value="currentTimezone ?? MTimezones[6].value"
      :options="MTimezones"
    />
  </UIFrame>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIFrame from '@Bundles/UIFrameBundle/Components/UIFrame.vue'
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { MTimezones } from '@Bundles/TimezoneBundle/Mocks/Timezone.mocks'
  import { getTimezone } from '@Bundles/TimezoneBundle/Services/Timezone.services'

  const currentTimezone = getTimezone(new Date())
  const { t } = useI18n()
</script>

<i18n src="@Bundles/TimezoneBundle/Locales/Timezone.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/TimezoneBundle/Styles/TimezoneSwitcher.styles.scss"
/>
