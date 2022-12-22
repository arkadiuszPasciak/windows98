<template>
  <div class="SettingsGeneral">
    <h3 class="title">Device:</h3>
    <p>... here will be system name</p>

    <h3 class="title">System:</h3>
    <p>{{ operatingSystem }}</p>

    <h3 class="title">Browser:</h3>
    <p>... here will be system name</p>
  </div>
</template>

<script setup lang="ts">
  import { getOperatingSystem } from '@Bundles/NavigatorBundle/Services/Navigator.services'

  const operatingSystem = getOperatingSystem(window)

  console.log(operatingSystem)
</script>

<style lang="scss" scoped></style>
