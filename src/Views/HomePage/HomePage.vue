<template>
  <div class="HomePage">
    <UIModal title="A Complete Window" :resize-window="true" />
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
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
</script>

<style lang="scss" scoped>
  .HomePage {
    position: relative;
  }
</style>
