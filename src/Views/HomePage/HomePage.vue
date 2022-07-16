<template>
  <div class="HomePage">
    <Pulpit />
    <Navigation />
  </div>
</template>

<script setup lang="ts">
  import Navigation from '@Bundles/NavigationBundle/Components/Navigation.vue'
  import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'
</script>

<style lang="scss" scoped>
  .HomePage {
    position: relative;
  }
</style>
