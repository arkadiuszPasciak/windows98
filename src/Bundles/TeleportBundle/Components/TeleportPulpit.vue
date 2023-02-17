<template>
  <TeleportGrid class="TeleportPulpit">
    <Calculator />
    <MediaPlayer />
    <Notepad />
    <Run />
    <Settings />
    <ShutDown />
  </TeleportGrid>
</template>

<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  import TeleportGrid from '@Bundles/TeleportBundle/Components/TeleportGrid.vue'

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

<style lang="scss" scoped></style>
