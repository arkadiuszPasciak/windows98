<template>
  <div class="HomePage">
    <TeleportPulpit />

    <Pulpit />

    <NavigationPulpit />
  </div>
</template>

<script setup lang="ts">
  import NavigationPulpit from '@Bundles/NavigationBundle/Components/NavigationPulpit.vue'
  import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'
  import TeleportPulpit from '@Bundles/TeleportBundle/Components/TeleportPulpit.vue'
</script>

<style lang="scss" scoped>
  .HomePage {
    position: relative;
    height: 100vh;
    width: 100vw;
  }
</style>
