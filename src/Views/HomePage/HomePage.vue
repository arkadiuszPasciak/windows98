<template>
  <div class="HomePage">
    <Pulpit />
    <Navigation>
      <Start />
      <Clock />
    </Navigation>
  </div>
</template>

<script setup lang="ts">
  import Clock from '@Bundles/ClockBundle/Components/Clock.vue'
  import Navigation from '@Bundles/NavigationBundle/Components/Navigation.vue'
  import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'
  import Start from '@Bundles/StartBundle/Components/Start.vue'
</script>

<style lang="scss" scoped>
  .HomePage {
    position: relative;
  }
</style>
