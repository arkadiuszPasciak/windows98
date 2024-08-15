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
import PulpitItem from "@APP|Bundles/PulpitBundle/Components/PulpitItem.vue"
import { usePulpitStore } from "@APP|Bundles/PulpitBundle/Stores/Pulpit.stores"
import type { IPulpitStoreApps } from "@APP|Bundles/PulpitBundle/Supports/Pulpit.supports"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const store = usePulpitStore()
const apps = store.$state.apps as IPulpitStoreApps[]
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/PulpitBundle/Styles/Pulpit.styles.scss"
/>
