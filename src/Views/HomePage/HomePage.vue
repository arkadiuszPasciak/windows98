<template>
  <div class="HomePage">
    <UITeleport>
      <Calculator />
      <MediaPlayer />
      <Notepad />
      <Run />
      <Settings />
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

  const MediaPlayer = defineAsyncComponent(
    () => import('@Bundles/MediaPlayerBundle/Components/MediaPlayer.vue'),
  )

  const Notepad = defineAsyncComponent(
    () => import('@Bundles/NotepadBundle/Components/Notepad.vue'),
  )

  const Run = defineAsyncComponent(
    () => import('@Bundles/RunBundle/Components/Run.vue'),
  )

  const Settings = defineAsyncComponent(
    () => import('@Bundles/SettingsBundle/Components/Settings.vue'),
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
