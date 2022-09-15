<template>
  <section class="Pulpit">
    <template v-if="apps">
      <PulpitItem
        v-for="(app, id) in apps"
        :key="`pulpit-item-${id}`"
        :name="t(app.name)"
        :icon-name="app.iconName"
      />
    </template>
  </section>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import PulpitItem from '@Bundles/PulpitBundle/Components/PulpitItem.vue'
  import { usePulpitStore } from '@Bundles/PulpitBundle/Stores/Pulpit.stores'
  import { IPulpitStoreApps } from '@Bundles/PulpitBundle/Supports/Pulpit.supports'

  const { t } = useI18n()
  const store = usePulpitStore()
  const apps = store.$state.apps as IPulpitStoreApps[]
</script>

<i18n src="@Bundles/PulpitBundle/Locales/Pulpit.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/PulpitBundle/Styles/Pulpit.styles.scss';
</style>
