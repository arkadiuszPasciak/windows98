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
  import { defineAsyncComponent } from 'vue'
  import Clock from '@Bundles/ClockBundle/Components/Clock.vue'
  import Navigation from '@Bundles/NavigationBundle/Components/Navigation.vue'
  import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'
  import Start from '@Bundles/StartBundle/Components/Start.vue'
  import UITeleport from '@Bundles/UIBundle/Components/UITeleport.vue'

  const Calculator = defineAsyncComponent(
    () => import('@Bundles/CalculatorBundle/Components/Calculator.vue'),
  )

  const ShutDown = defineAsyncComponent(
    () => import('@Bundles/ShutDownBundle/Components/ShutDown.vue'),
  )
</script>

<style lang="scss" scoped>
  .HomePage {
    position: relative;
    height: 100vh;
    width: 100vw;
  }
</style>
