<template>
  <UIFrame class="CalendarSettings" :title="t('CalendarBundle.title')">
    <CalendarMonthSwitcher />
    <CalendarYearSwitcher />
    <CalendarView />
  </UIFrame>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import CalendarMonthSwitcher from '@Bundles/CalendarBundle/Components/CalendarMonthSwitcher.vue'
  import CalendarYearSwitcher from '@Bundles/CalendarBundle/Components/CalendarYearSwitcher.vue'
  import CalendarView from '@Bundles/CalendarBundle/Components/CalendarView.vue'
  import UIFrame from '@Bundles/UIBundle/Components/UIFrame.vue'

  const { t } = useI18n()
</script>

<i18n src="@Bundles/CalendarBundle/Locales/Calendar.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/CalendarBundle/Styles/CalendarSettings.styles.scss"
/>
