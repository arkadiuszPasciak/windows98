<template>
  <div class="SettingsDateTime">
    <CalendarSettings />
    <TimezoneSwitcher />
  </div>
</template>

<script setup lang="ts">
  import CalendarSettings from '@Bundles/CalendarBundle/Components/CalendarSettings.vue'
  import TimezoneSwitcher from '@Bundles/TimezoneBundle/Components/TimezoneSwitcher.vue'
</script>

<style
  lang="scss"
  scoped
  src="@Bundles/SettingsBundle/Styles/SettingsDateTime.styles.scss"
/>
