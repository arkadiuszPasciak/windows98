<template>
  <HomePage />
</template>

<script setup lang="ts">
  import HomePage from '@Views/HomePage/HomePage.vue'
  import { onBeforeMount } from 'vue'
  import { useClockStore } from '@Bundles/ClockBundle/Stores/Clock.stores'

  const clockStore = useClockStore()

  onBeforeMount(() => {
    clockStore.updateTime()
  })
</script>

<style lang="scss"></style>
