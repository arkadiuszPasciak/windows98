<template>
  <nav class="Navigation">
    <Start />
    <Clock />
  </nav>
</template>

<script setup lang="ts">
  import Clock from '@Bundles/ClockBundle/Components/Clock.vue'
  import Start from '@Bundles/StartBundle/Components/Start.vue'
</script>

<style lang="scss" scoped>
  @import '@Bundles/NavigationBundle/Styles/Navigation.styles.scss';
</style>
