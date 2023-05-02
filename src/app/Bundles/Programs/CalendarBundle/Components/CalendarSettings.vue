<template>
  <UIFrame class="CalendarSettings" :title="t('CalendarBundle.title')">
    <CalendarMonthSwitcher />
    <CalendarYearSwitcher />
    <CalendarView />
  </UIFrame>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import CalendarMonthSwitcher from '@APP|Bundles/CalendarBundle/Components/CalendarMonthSwitcher.vue'
  import CalendarYearSwitcher from '@APP|Bundles/CalendarBundle/Components/CalendarYearSwitcher.vue'
  import CalendarView from '@APP|Bundles/CalendarBundle/Components/CalendarView.vue'
  import UIFrame from '@APP|Bundles/UIFrameBundle/Components/UIFrame.vue'

  const { t } = useI18n()
</script>

<i18n src="@APP|Bundles/CalendarBundle/Locales/Calendar.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/CalendarBundle/Styles/CalendarSettings.styles.scss"
/>
