<template>
  <div class="HomePage">
    <UITeleport>
      <Calculator />
      <ShutDown />
    </UITeleport>
    <Pulpit />
    <Navigation>
      <Start />
      <Clock />
    </Navigation>
  </div>
</template>

<script setup lang="ts">
  import Calculator from '@Bundles/CalculatorBundle/Components/Calculator.vue'
  import Clock from '@Bundles/ClockBundle/Components/Clock.vue'
  import Navigation from '@Bundles/NavigationBundle/Components/Navigation.vue'
  import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'
  import Start from '@Bundles/StartBundle/Components/Start.vue'
  import UITeleport from '@Bundles/UIBundle/Components/UITeleport.vue'
  import ShutDown from '@Bundles/ShutDownBundle/Components/ShutDown.vue'
</script>

<style lang="scss" scoped>
  .HomePage {
    position: relative;
    height: 100vh;
    width: 100vw;
  }
</style>
