<template>
  <div class="UITabs">
    <div class="tabs">
      <button
        v-for="(tab, id) in tabs"
        :key="`ui-tabs-button-${tab}-${id}`"
        class="tab"
        :class="id === activeIndex ? 'active' : ''"
        type="button"
        @click="setActiveTab(id)"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="content">
      <component
        :is="tab.component"
        v-for="(tab, id) in tabs"
        :key="`ui-tabs-content-${tab}-${id}`"
        class="content-tab"
        :class="id === activeIndex ? 'active' : ''"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType, Ref, ref } from 'vue'
  import { TUITabsProps } from '@Bundles/UIBundle/Supports/UITabs.supports'

  defineProps({
    tabs: {
      type: Object as PropType<TUITabsProps>,
      required: true,
    },
  })

  const activeIndex = ref(0) as Ref<number>

  const setActiveTab = (id: number): void => {
    if (activeIndex.value === id) {
      return
    }

    activeIndex.value = id
  }
</script>

<style lang="scss" scoped>
  @import '@Bundles/UIBundle/Styles/UITabs.styles.scss';
</style>
