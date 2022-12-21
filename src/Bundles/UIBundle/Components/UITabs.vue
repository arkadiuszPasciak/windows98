<template>
  <div class="UITabs">
    <div class="tabs">
      <button
        v-for="(tab, id) in tabs"
        :key="`ui-tabs-button-${tab}-${id}`"
        class="tab"
        type="button"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="contents">
      <div
        v-for="(tab, id) in tabs"
        :key="`ui-tabs-content-${tab}-${id}`"
        class="content"
      >
        <component :is="tab.component"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { TUITabsProps } from '@Bundles/UIBundle/Supports/UITabs.supports'

  defineProps({
    tabs: {
      type: Object as PropType<TUITabsProps>,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UITabs.styles.scss';
</style>
