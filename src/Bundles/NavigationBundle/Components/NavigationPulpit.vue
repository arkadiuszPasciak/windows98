<template>
  <NavigationGrid class="NavigationPulpit">
    <Start />
    <AudioButton />
    <Clock />
  </NavigationGrid>
</template>

<script setup lang="ts">
  import AudioButton from '@Bundles/AudioBundle/Components/AudioButton.vue'
  import Clock from '@Bundles/ClockBundle/Components/Clock.vue'
  import NavigationGrid from '@Bundles/NavigationBundle/Components/NavigationGrid.vue'
  import Start from '@Bundles/StartBundle/Components/Start.vue'
</script>

<style lang="scss" scoped></style>
