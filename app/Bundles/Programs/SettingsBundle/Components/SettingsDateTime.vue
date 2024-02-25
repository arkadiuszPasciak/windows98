<template>
  <div class="SettingsDateTime">
    <!-- <CalendarSettings /> -->
    <ma-calendar></ma-calendar>
    <TimezoneSwitcher />
  </div>
</template>

<script setup lang="ts">
  // import CalendarSettings from '@APP|Bundles/CalendarBundle/Components/CalendarSettings.vue'
  import TimezoneSwitcher from '@APP|Bundles/TimezoneBundle/Components/TimezoneSwitcher.vue'

  import '@windows98/micro-apps'
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/SettingsBundle/Styles/SettingsDateTime.styles.scss"
/>
