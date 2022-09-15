<template>
  <section class="Pulpit">
    <template v-if="apps">
      <PulpitItem
        v-for="(app, id) in apps"
        :key="`pulpit-item-${id}`"
        :name="app.name"
        :icon-name="app.iconName"
      />
    </template>
  </section>
</template>

<script setup lang="ts">
  import PulpitItem from '@Bundles/PulpitBundle/Components/PulpitItem.vue'
  import { usePulpitStore } from '@Bundles/PulpitBundle/Stores/Pulpit.stores'
  import { IPulpitStoreApps } from '@Bundles/PulpitBundle/Supports/Pulpit.supports'

  const store = usePulpitStore()
  const apps = store.$state.apps as IPulpitStoreApps[]
</script>

<style lang="scss" scoped>
  @import '@Bundles/PulpitBundle/Styles/Pulpit.styles.scss';
</style>
