<template>
  <div class="SettingsDateTime">
    <ma-calendar></ma-calendar>
    <TimezoneSwitcher />
  </div>
</template>

<script setup lang="ts">
  import TimezoneSwitcher from '@APP|Bundles/TimezoneBundle/Components/TimezoneSwitcher.vue'

  import '@windows98/micro-apps'
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/SettingsBundle/Styles/SettingsDateTime.styles.scss"
/>
