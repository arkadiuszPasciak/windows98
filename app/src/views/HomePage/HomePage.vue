<template>
  <div class="HomePage">
    <TeleportPulpit />

    <ma-pulpit />

    <NavigationPulpit />
  </div>
</template>

<script setup lang="ts">
import NavigationPulpit from "@APP|Bundles/NavigationBundle/Components/NavigationPulpit.vue"
import TeleportPulpit from "@APP|Bundles/TeleportBundle/Components/TeleportPulpit.vue"
</script>

<style lang="scss" scoped>
  .HomePage {
    position: relative;
    height: 100vh;
    width: 100vw;
  }
</style>
