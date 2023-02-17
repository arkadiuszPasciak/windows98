<template>
  <div class="HomePage">
    <TeleportPulpit />

    <Pulpit />

    <Navigation>
      <Start />
      <AudioButton />
      <Clock />
    </Navigation>
  </div>
</template>

<script setup lang="ts">
  import AudioButton from '@Bundles/AudioBundle/Components/AudioButton.vue'
  import Clock from '@Bundles/ClockBundle/Components/Clock.vue'
  import Navigation from '@Bundles/NavigationBundle/Components/Navigation.vue'
  import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'
  import Start from '@Bundles/StartBundle/Components/Start.vue'
  import TeleportPulpit from '@Bundles/TeleportBundle/Components/TeleportPulpit.vue'
</script>

<style lang="scss" scoped>
  .HomePage {
    position: relative;
    height: 100vh;
    width: 100vw;
  }
</style>
