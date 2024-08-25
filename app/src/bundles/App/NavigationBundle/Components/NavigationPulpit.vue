<template>
  <NavigationGrid class="NavigationPulpit">
    <Start />
    <AudioButton />
    <Clock />
  </NavigationGrid>
</template>

<script setup lang="ts">
import AudioButton from "@APP|Bundles/AudioBundle/Components/AudioButton.vue"
import Clock from "@APP|Bundles/ClockBundle/Components/Clock.vue"
import NavigationGrid from "@APP|Bundles/NavigationBundle/Components/NavigationGrid.vue"
import Start from "@APP|Bundles/StartBundle/Components/Start.vue"
</script>

<style lang="scss" scoped></style>
