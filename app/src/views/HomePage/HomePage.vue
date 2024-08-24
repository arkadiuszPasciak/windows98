<template>
  <div class="HomePage">
    <TeleportPulpit />

    <Pulpit />

    <NavigationPulpit />
  </div>
</template>

<script setup lang="ts">
import NavigationPulpit from "@APP|Bundles/NavigationBundle/Components/NavigationPulpit.vue"
import Pulpit from "@APP|Bundles/PulpitBundle/Components/Pulpit.vue"
import TeleportPulpit from "@APP|Bundles/TeleportBundle/Components/TeleportPulpit.vue"
</script>

<style lang="scss" scoped>
  .HomePage {
    position: relative;
    height: 100vh;
    width: 100vw;
  }
</style>
