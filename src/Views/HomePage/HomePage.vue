<template>
  <div class="HomePage">
    <UITeleport />
    <template v-if="false">
      <Pulpit />
      <Navigation>
        <Start />
        <Clock />
      </Navigation>
    </template>
  </div>
</template>

<script setup lang="ts">
  import Clock from '@Bundles/ClockBundle/Components/Clock.vue'
  import Navigation from '@Bundles/NavigationBundle/Components/Navigation.vue'
  import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'
  import Start from '@Bundles/StartBundle/Components/Start.vue'
  import UITeleport from '@Bundles/UIBundle/Components/UITeleport.vue'
</script>

<style lang="scss" scoped>
  .HomePage {
    height: 100vh;
    width: 100vw;
  }
</style>
